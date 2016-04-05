
const Archiver = require('archiver'); // npm install archiver
const fs = require('fs');

const IGNORE_DIR_PATTERNS = [/node_modules/];
const IGNORE_FILE_PATTERNS = [];
const TARGET_FILE_NAME = 'homework.zip';

const matchesAnyPattern = (patterns, testString) => {
  return patterns.some((pattern) => testString.match(pattern));
};

const pathsInCurrentDirectory = fs.readdirSync('.');

const files = pathsInCurrentDirectory
  .filter((path) => fs.statSync(path).isFile())
  .filter((filePath) => !matchesAnyPattern(IGNORE_FILE_PATTERNS, filePath));

const folders = pathsInCurrentDirectory
  .filter((path) => fs.statSync(path).isDirectory())
  .filter((dirPath) => !matchesAnyPattern(IGNORE_DIR_PATTERNS, dirPath));

const archive = Archiver.create('zip', {});
files.forEach((filePath) => archive.file(filePath));
folders.forEach((folderPath) => archive.directory(folderPath));

archive.pipe(fs.createWriteStream(TARGET_FILE_NAME));
