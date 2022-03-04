import { noteService } from "../services/note-service.js";
import { utilService } from "../../../services/util-service.js";


export default {
    template: `
    <section class="note-add">
        <input type="text" v-model="title" class="note-input" :placeholder="placeholder" >
        <div @click="setType(noteImg)" >
            <i><img  class="fa fa-image" src="../../../../../img/image.png"></i>
        </div>
        <div @click="setType(noteTxt)" >
            <i><img  class="fa fa-image" src="../../../../../img/text.png"></i>
        </div>
        <div @click="setType(noteVid)" >
            <i><img  class="fa fa-image" src="../../../../../img/video-camera.png"></i>
        </div>
        <div @click="setType(noteList)" >
            <i><img  class="fa fa-image" src="../../../../../img/menu.png"></i>
        </div>
        </div>
        <div @click="onSaveNote">
             <i> <img  class="fa fa-image" src="../../../../../img/menu.png"></i>
        </div>
                <!-- <form @submit.prevent="save" > -->
                <!-- <select name="type" v-model="fromTimeWindow"> -->
                    <!-- <option @change="setFilter('noteTxt')" value="What's on your mind...">Text</option><img src="/../../../../../../img/text.png"> -->
                    <!-- <option @change="setFilter('noteImg')" value="Enter image URL">Image</option> -->
                    <!-- <option @change="setFilter('noteVid')" value="Enter video URL">Video</option> -->
                    <!-- <option @change="setFilter('noteList')" value="Enter comma seperated list..">List</option> -->
                <!-- </select> -->
            <!-- </form> -->
            <!-- <button class="btn-save" @click="save">save</button> -->
            <!-- <div>
                <input v-model="val" type="text">
                
           </div>
            <button>Save</button> -->
    </section>
    `,
    data() {
        return {
            note: null,
            title: '',
            placeholder: `What's on your mind...`,
        };

    },
    created() {
        this.note = noteService.getEmptyNote();
    },
    methods: {
        onSaveNote() {
            if (this.note.type === 'noteImg' || this.note.type === 'noteVid')
                this.note.info.url = this.title;
            if (this.note.type === 'noteTxt') this.note.info.txt = this.title;
            if (this.note.type === 'noteList') {
                var todos = this.title.split(',').map(todoTxt => {
                    return { id: utilService.makeId(), txt: todoTxt, doneAt: null };
                });
                this.note.info.todos = todos;
            }
            noteService.save(this.note).then(() => {
                // eventBus.emit('updateNotes');
            });
        },
        setType(type) {
            this.noteType = type;
            switch (type) {
                case 'noteImg':
                    this.placeholder = 'Enter image URL...';
                    break;
                case 'noteVid':
                    this.placeholder = 'Enter video URL...';
                    break;
                case 'noteTxt':
                    this.placeholder = `What's on your mind...`;
                    break;
                case 'noteList':
                    this.placeholder = 'Enter comma separated list...';
            }
            console.log('type:', this.note.type);

        }
    }
}