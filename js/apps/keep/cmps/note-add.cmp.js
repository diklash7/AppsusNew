import { noteService } from "../services/note-service.js";
import { utilService } from "../../../services/util-service.js";

export default {
    template: `
    <section class="note-add">
        <input type="text" v-model="title" class="note-input" :placeholder="placeholder" >
            <i><img @click="setType('note-img')"  class="fa fa-image" src="../../../../../img/image.png"></i>
            <img  @click="setType('note-txt')" class="fa fa-image" src="../../../../../img/text.png">
            <i><img   @click="setType('note-video')"   class="fa fa-image" src="../../../../../img/video-camera.png"></i>
            <i><img @click="setType('note-list')"   class="fa fa-image" src="../../../../../img/menu.png"></i>
            <i> <img  @click="onSaveNote" class="fa fa-image" src="../../../../../img/menu.png"></i>
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
            if (this.note.type === 'note-img' || this.note.type === 'note-video')
                this.note.info.url = this.title;
            if (this.note.type === 'note-txt') this.note.info.txt = this.title;
            if (this.note.type === 'note-list') {
                var todos = this.title.split(',').map(todoTxt => {
                    return { id: utilService.makeId(), txt: todoTxt, doneAt: null };
                });
                this.note.info.todos = todos;
            }
            noteService.save(this.note).then(() => {});
        },
        setType(type) {
            this.note.type = type;
            switch (type) {
                case 'note-img':
                    this.placeholder = 'Enter image URL...';
                    break;
                case 'note-video':
                    this.placeholder = 'Enter video URL...';
                    break;
                case 'note-txt':
                    this.placeholder = `What's on your mind...`;
                    break;
                case 'note-list':
                    this.placeholder = 'Enter comma separated list...';
            }
            console.log('type:', this.note.type);

        }
    }
}