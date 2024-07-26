const path = require('path');
const { spawn } = require('child_process');

const getSchemes = async (req, res) => {
    const { url } = req.body; // Get the URL from the request body

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const pythonExecutable = 'python'; // Adjust if necessary
    const scriptPath = path.join('D://Projects//Hackathon//SMSInfoService//python', '..', 'scripts', 'getGovernmentSchemes.py');
    const pythonProcess = spawn(pythonExecutable, [scriptPath, url]);

    let dataBuffer = '';

    pythonProcess.stdout.on('data', (data) => {
        dataBuffer += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`Python process exited with code ${code}`);
        if (code === 0) {
            try {
                const schemes = JSON.parse(dataBuffer);
                res.status(200).json(schemes);
            } catch (error) {
                res.status(500).json({ error: 'Error parsing schemes data' });
            }
        } else {
            res.status(500).json({ error: 'Python script failed' });
        }
    });

    pythonProcess.on('error', (err) => {
        console.error(`Error: ${err.message}`);
        res.status(500).json({ error: 'Error executing Python script' });
    });
};

module.exports = { getSchemes };
