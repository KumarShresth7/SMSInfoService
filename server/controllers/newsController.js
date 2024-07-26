const path = require('path');
const { spawn } = require('child_process');

const pythonScriptPath = path.join('D://Projects//Hackathon//SMSInfoService//python','news_scraper.py')

const headlines =  async (req, res) => {
    const { country } = req.body; // Get the country from query parameters

    if (!country) {
        return res.status(400).json({ error: 'Country is required' });
    }

    const pythonExecutable = 'python';
    const pythonProcess = spawn(pythonExecutable, [pythonScriptPath, country]);
    pythonProcess.stdout.on('data', (data) => {
        try {
            const headlines = JSON.parse(data.toString());
            res.status(200).json(headlines);
        } catch (error) {
            res.status(500).json({ error: 'Error parsing news headlines data' });
        }
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        res.status(500).json({ error: 'Error fetching news headlines' });
    });

    pythonProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};

module.exports = {headlines}
