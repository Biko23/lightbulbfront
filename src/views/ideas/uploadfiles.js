import axios from 'axios'

class UploadFileService {

    upload(file, onUploadProgress){
        let formData = new FormData();

        formData.append("file", file);

        return axios.post("http://localhost:8090/api/attachments", formData, {
            headers:{
                "content-Type": "multipart/form-data"
            },
            onUploadProgress
        });

    }

    getFiles(){
        return axios.get("http://localhost:8090/api/attachments")
    }
    
}
export default new UploadFileService();