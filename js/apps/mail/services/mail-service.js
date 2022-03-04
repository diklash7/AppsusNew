import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

const STORAGE_KEY = 'mails';
_createMails();

const loggedinUser = {
    mail: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

export const mailService = {
    query,
    remove,
    save,
    get,
    getEmptyMail,
    saveMailSent
};

function query() {
    return storageService.query(STORAGE_KEY);
}

function remove(mailId) {
    return storageService.remove(STORAGE_KEY, mailId);
}

function get(mailId) {
    return storageService.get(STORAGE_KEY, mailId)
}

function save(mail) {
    if (mail.id) return storageService.put(STORAGE_KEY, mail);
    else return storageService.post(STORAGE_KEY, mail);
}

function saveMailSent(mailId, sent) {
    return get(mailId)
        .then(mail => {
            if (!mail.sents) mail.sents = []
            mail.sents.push(sent)
            save(mail)
            return mail
        })
}

function getEmptyMail() {
    return {
        id: '',
        subject: '',
        body: '',
        isRead: '',
        sentAt: '',
        to: ''

    };
}

function _createMails() {
    let mails = utilService.loadFromStorage(STORAGE_KEY)
    if (!mails || !mails.length) {
        mails = [{
                fullname: 'Dikla',
                id: 'e101',
                subject: 'Miss you!',
                body: 'Lorem ipsum dolor,  id vel sit quidem illum ab minus labore consequuntur, atque voluptatum suscipit repudiandae, quia hic ullam quisquam ipsam voluptatibus',
                isRead: false,
                sentAt: '',
                to: 'momo@momo.com'
            },
            {
                fullname: 'Itsar',
                id: 'e102',
                subject: 'Hello friend!',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam illo inventore possimus mollitia praesentium quaerat, similique magni accusantium qui repellat culpa exercitationem ipsum nobis repellendus. Porro dolore natus fugit esse?',
                isRead: false,
                sentAt: '',
                to: 'popo@popo.com'
            },
            {
                fullname: 'Inbar',
                id: 'e103',
                subject: 'Good bye!',
                body: 'Lorem ipsum dolor sit amet,  Porro dolore natus fugit esse?',
                isRead: false,
                sentAt: '',
                to: 'lolo@lolo.com'
            },
            {
                fullname: 'Ohad',
                id: 'e104',
                subject: 'Good bye!',
                body: 'Lorem ipsum dolor sit amet,  Porro dolore natus fugit esse?',
                isRead: false,
                sentAt: '',
                to: 'lolo@lolo.com'
            },
            {
                fullname: 'Shira',
                id: 'e105',
                subject: 'hiiiiiiii!',
                body: 'Lorem ipsum dolor sit amet,  Porro dolore natus fugit esse?',
                isRead: false,
                sentAt: '',
                to: 'lolo@lolo.com'
            }

        ]
        utilService.saveToStorage(STORAGE_KEY, mails);
    }
    return mails
}