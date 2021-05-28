<template>
    
      <CCol md="6">
        <CCard>
          <CForm>
          <CCardBody>
              <!-- <CInput
                v-model="title"
                type="text"
                horizontal
                placeholder="Idea title...."
              />
              <CTextarea
                v-model="description"
                type="text"
                horizontal
                placeholder="Idea description..."
              />
              <CTextarea
                v-model="executiveSummary"
                type="text"
                horizontal
                placeholder="Executive summary"
              />
              <CTextarea
                v-model="backgroundIdeaDescription"
                type="text"
                horizontal
                placeholder="Background..."
              />
              <CInput
                v-model="workFlowStatus"
                type="text"
                horizontal
                placeholder="workFlowStatus..."
              />
              <CInput
                v-model="category"
                type="text"
                horizontal
                placeholder="category..."
              />
              <CInput
                v-model="globalUserId"
                type="text"
                horizontal
                placeholder="Global User Id..."
              />
               -->
                <!-- <div class="alert alert-light" role="alert">{{ message }}</div>
                <CProgress :value="progress" size="sm"/>
                <CProgress
                :value="progress"
                color="success"
                animated
                show-value
                style="height:20px;"
                class="mt-1"
                />
              <CInput
                type="file"
                ref="file"
                name="attachment"
                @change="selectFile"
                horizontal
                placeholder="Upload..."
              />
              <CButton
              @click="upload"
              >Upload</CButton> -->
              <div class="card">
                  {{fileInfo}}
                <div class="card-header">List of Files</div>
                <ul class="list-group list-group-flush">
                    <li
                    class="list-group-item"
                    v-for="(file, index) in fileInfo"
                    :key="index"
                    >
                    <a :href="file.url">{{ file.name }}</a>
                    </li>
                </ul>
                </div>
          </CCardBody>
          <!-- <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter> -->
          </CForm>
        </CCard>
      </CCol>
    
</template>

<script>
import axios from 'axios'
// import axios from 'axios'
import uploadFiles from './uploadfiles'
export default {
    name:"Ideas",
    data(){
    return {
        // title: '',
        // executiveSummary:'',
        // backgroundIdeaDescription:'',
        // description:'',
        // category:'',
        // globalUserId:'',
        // workFlowStatus:'',
        selectedFile: undefined,
        currentFile: undefined,
        progress: 0,
        message:'',

        fileInfo:[]

    }
    },
    methods:{

        selectFile(){
             this.selectedFile = this.$refs.files

        },

        // upload(){
        //     console.log("Here we go lets upload....")
        //     this.progress=0;

        //     this.currentFile = this.selectedFile.files;
        //     console.log(this.currentFile);
        //     uploadFiles.upload(this.currentFile, event =>{
        //         this.progress = Math.round((100*event.loaded)/event.total)
        //     })
        //     .then(response =>{
        //         this.message = response.data.message;
        //         return uploadFiles.getFiles();
        //     })
        //     .then(files => {
        //         this.fileInfo = files.data
        //     })
        //     .catch(() =>{
        //         this.progress = 0;
        //         this.message = "File couldn't be uploaded"
        //         this.currentFile = undefined;
        //     });
        //     this.selectedFile = undefined;
        // },
        getAttachments(){
            axios.get("http://localhost:8090/api/attachments")
            .then((response) => {console.log(response)})
            .catch(error => console.log(error))

        },

        created(){
            this.getAttachments();

            // uploadFiles.getFiles().then(response =>{

            //     this.fileInfo = response.data
            // });
        }

        // addIdea(){
        //     axios.post("http://localhost:8090/api/ideas", {
        //         title: this.title,
        //         description: this.description,
        //         executiveSummary: this.executiveSummary,
        //         backgroundIdeaDescription: this.backgroundIdeaDescription,
        //         category: this.category,
        //         globalUserId: this.globalUserId,
        //         workFlowStatus: this.workFlowStatus,
        //         attachment: this.attachment
        //     })
        //     .then((response) => console.log(response))
        //     .catch(error => console.log(error))
        // }

    }
    
}
</script>

<style scoped>

</style>