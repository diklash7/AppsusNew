import colorPicker from './note-color-pick.cmp.js';
import { eventBus } from '../../../services/eventBus-service.js';

export default {
  props: ['note'],
  template: `
        <section class="note-actions">
           
               <div class="color-palette" @click="chooseColor = !chooseColor" > 
                    <i><img class="imgBtn" src="../../../../img/palette.png"></i>
                    <color-picker  v-if="chooseColor" @updateColor="updateColor"/>
                </div>
                <div @click="togglePin">
                  <i v-if="note.isPinned"></i>
                  <img v-else src="/css/apps/notes/img/thumbtack.png"  alt="">
                </div>

                <div @click="removeNote">
                  <i><img class="imgBtn" src="../../../../img/bin.png"></i>
                </div>

                <div @click="duplicateNote">
                  <i></i>
                </div>

                <div @click="editNote">
                   <i></i>
                </div>
        </section>
    `,
  components: {
    colorPicker,
  },
  created() {},
  data() {
    return {
      chooseColor: false,
    };
  },
  methods: {
    updateColor(color) {
      this.$emit('updateColor', color);
    },
    togglePin() {
      this.$emit('togglePin');
    },
    removeNote() {
      this.$emit('removeNote');
    },
    duplicateNote() {
      this.$emit('duplicateNote');
    },
    editNote() {
      this.$emit('editNote');

      eventBus.emit('openEdit', this.note);
      // this.$router.push(`/notes/${this.note.id}`);
    },
  },
  computed: {},
  unmounted() {},
};



// export default {
//     props: ["noteType", "fontColor"],
//     template: `
// <section>
//     <i title="Change note color">
//         <div>
//             <span @click="emitColor('rgb(255, 255, 255)', 'black')" style="background-color: rgb(255, 255, 255);"> &nbsp; </span>
//             <span @click="emitColor('#e3e3e3', 'black')" style="background-color: #e3e3e3;"> &nbsp; </span>
//             <span @click="emitColor('#f88', 'black')" style="background-color: #f88;"> &nbsp; </span>
//             <span @click="emitColor('#865687', 'black')" style="background-color: #865687;"> &nbsp; </span>
//             <span @click="emitColor('#4a4150')" style="background-color: #4a4150;"> &nbsp; </span>
//             <span @click="emitColor('#4a4a4a')" style="background-color: #4a4a4a;"> &nbsp; </span>
//             <span @click="emitColor('#222222')" style="background-color: #222222;"> &nbsp; </span>
//             <span @click="emitColor('#010630')" style="background-color: #010630;"> &nbsp; </span>
//             <span @click="emitColor('#440101')" style="background-color: #440101;"> &nbsp; </span>
//             <span @click="emitColor('#000')" style="background-color: #000;"> &nbsp; </span>
//         </div>
//     </i> 
//     <i @click="remove(note.id)"></i>
//                     <input type="color" :style="note.id.backgroundColor" class="btn-remove" v-model="note.id.backgroundColor" >
//                     <img class="imgBtn" src="../../../../../img/copying.png">
//                     <img class="imgBtn" src="../../../../img/edit.png">
//                     <img class="imgBtn" src="../../../../img/pin.png">
//                     <img class="imgBtn" src="../../../../img/check-mark.png">
                    
// </section>
// `,
