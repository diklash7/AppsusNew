import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteVideo from './note-video.cmp.js'
import notePreview from './note-preview.cmp.js'
export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <form  @submit.prevent="save">
                <input type="text" class="note-input" :placeholder="fromTimeWindow" >
                <select name="type" v-model="fromTimeWindow">
                    <option value="all!!">ALL</option>
                    <option value="What's on your mind...">Text</option><img src="/../../../../../../img/text.png">
                    <option value="Enter image URL">Image</option>
                    <option value="Enter video URL">Video</option>
                    <option value="Enter comma seperated list..">List</option>
                </select>
                <button class="btn-save" @click="save">save</button>
            </form>
            <ul>
                <li class="note-style"  v-for="note in notes"> 
                    <component :is="note.type" :info="note.info"> </component>
                    <!-- <button class="btn-remove" @click="remove(note.id)"><img src="../../../../img/bin.png"></button> -->
                    <input type="color" :style="note.id.backgroundColor" class="btn-remove" v-model="note.id.backgroundColor" >
                    <button class="btn-remove" @click="remove(note.id)"><img class="imgBtn" src="../../../../img/bin.png">
                    <img class="imgBtn" src="../../../../../img/copying.png">
                    <img class="imgBtn" src="../../../../img/edit.png">
                    <img class="imgBtn" src="../../../../img/pin.png">
                    <img class="imgBtn" src="../../../../img/check-mark.png">
                    <img class="imgBtn" src="../../../../img/palette.png">
                    <!-- <note-preview :note="note"/> -->
                    <!-- <div class="actions">
                    </div>  -->
                </li>
            </ul>
        </section>

`,
    data() {
        return {
            fromTimeWindow: 'Hey here is custom placeholder',
            styleObject:{
                backgroundColor: 'yellow'
            }
        }
    },
    components: {
        notePreview,
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo
    },
    methods: {
        remove(id) {
            console.log(id)
            this.$emit('remove', id);
        },
    },
    save() {
        if (!this.note.id) return;
        noteService.save(this.note)
            // .then(note => {
            //     eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'success' })
            //     this.$router.push('/note')
            // });
    },
    computed: {
        placeHolderType() {
            console.log('type:', notes.type);

        },
        changeBcg(noteId){
           return note.id.styleObject.backgroundColor
        }

    }

}