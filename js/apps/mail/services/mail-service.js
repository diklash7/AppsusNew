import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'

const STORAGE_KEY = 'mails';
_createMails();

export const mailService = {
    query,
    remove,
    save,
    get,
    getEmptyMail,
    saveMailSent,
    createDraft
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

function saveMailSent(mailId) {
    const mail = _createMail(mailId.subject, mailId.body, Date.now(), mailId.to, isInbox, isDraft)
    return storageService.post(STORAGE_KEY, mail);
}

function _createMail(subject, body, sentAt, to, isRead, isInbox, isDraft) {
    const mail = getEmptyMail(subject, body, sentAt, to, isRead, isInbox, isDraft)
    mail.id = utilService.makeId()
    return mail;
}

function createDraft(mailId) {
    const draft = _createMail(mailId.subject, mailId.body, Date.now(), mailId.to, false, false, true)
    return storageService.post(STORAGE_KEY, draft);
}

function getEmptyMail(isRead = false, isInbox = true, isStared = false, isDraft = false) {
    return {
        id: '',
        subject: '',
        body: '',
        sentAt: '',
        to: '',
        isRead,
        isInbox,
        isStared,
        isDraft,
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
                isInbox: false,
                to: 'momo@momo.com'
            },
            {
                fullname: 'Itsar',
                id: 'e102',
                subject: 'Hello friend!',
                body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam illo inventore possimus mollitia praesentium quaerat, similique magni accusantium qui repellat culpa exercitationem ipsum nobis repellendus. Porro dolore natus fugit esse?',
                isRead: false,
                sentAt: '',
                isInbox: false,
                to: 'popo@popo.com'
            },
            {
                fullname: 'Inbar',
                id: 'e103',
                subject: 'Good bye!',
                body: 'Lorem ipsum dolor sit amet,  Porro dolore natus fugit esse?',
                isRead: false,
                isInbox: true,
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
                isInbox: true,
                to: 'lolo@lolo.com'
            },
            {
                fullname: 'Shira',
                id: 'e105',
                subject: 'hiiiiiiii!',
                body: 'Lorem ipsum dolor sit amet,  Porro dolore natus fugit esse?',
                isRead: false,
                sentAt: '',
                isInbox: false,
                to: 'lolo@lolo.com'
            }

        ]
        utilService.saveToStorage(STORAGE_KEY, mails);
    }
    return mails
}