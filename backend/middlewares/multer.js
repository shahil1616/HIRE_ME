import multer from "multer";

// 1. Create in-memory storage
const storage = multer.memoryStorage();

// 2. Configure multer with storage
const upload = multer({ storage: storage }).single("file");

// 3. Export the upload middleware
export default upload;
