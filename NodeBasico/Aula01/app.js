const fs = require('fs');
const path = require('path');
const ffmpegPath = require('ffmpeg-static');
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegPath);

const getVideoDuration = (filePath) => {
    return new Promise((resolve, reject) => {
        ffmpeg.ffprobe(filePath, (err, metadata) => {
            if (err) {
                reject(err);
            } else {
                resolve(metadata.format.duration);
            }
        });
    });
};

const getTotalVideoDuration = async (directory) => {
    let totalDuration = 0;

    const files = fs.readdirSync(directory);
    for (const file of files) {
        const filePath = path.join(directory, file);

        if (fs.statSync(filePath).isFile() && /\.(mp4|mkv|avi|mov|wmv|flv)$/i.test(file)) {
            try {
                const duration = await getVideoDuration(filePath);
                totalDuration += duration;
            } catch (error) {
                console.error(`Erro ao processar ${filePath}: ${error.message}`);
            }
        }
    }

    return totalDuration;
};

// Defina o caminho do diretório aqui
const directory = 'C:\Users\Casa\Downloads\Ignite NodeJs - Rocketseat';

getTotalVideoDuration(directory)
    .then(totalDurationSeconds => {
        const totalDurationMinutes = totalDurationSeconds / 60;
        console.log(`Duração total dos vídeos no diretório ${directory}: ${totalDurationMinutes.toFixed(2)} minutos`);
    })
    .catch(error => {
        console.error(`Erro: ${error.message}`);
    });
