/**
 * Interfaces
 */
import { User } from './login/user.interface';
import { Mailbox } from './mailbox/mailbox.interface';
import { Contact } from './mailbox/contacts/contact/contact.interface';
import { Letter } from './mailbox/letter/letter.interface';
/**
 * Rxjs
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/**
 * Возвращает рандомный id.
 */
function uid() {
    var i, random;
    var result = '';

    for (i = 0; i < 24; i++) {
        random = Math.random() * 16 | 0;
        result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
            .toString(16);
    }

    return result;
}

/**
 * Все методы в этом файле как бы серверные.
 */

/**
 * В базе данных предполагаю три таблицы:
 * --- Пользователи ---
 * --- Почтовые ящики ---
 * --- Письма ---
 */

// Тут условно прописан пароль, в реальности, конечно,
// данные аутентификации уходят на сервер, который
// возвращает true или false.
export let user: User = {
    'id': '28a89b94fa12372d365e5369',
    'email': 'user@mail.com',
    'password': '123'
}

let mailboxData = {
    'id': '58a89bb94fa2372d365e5063',
    'userId': '28a89b94fa12372d365e5369',
    'email': 'user@mail.com',
    'name': 'Alexanger Gulnyashkin',
    'photo': '/assets/img/avatar.jpg',
    'contacts': [
        {
            'id': '67a09eb98fqj372d365e5063',
            'name': 'Stark Stein',
            'email': 'starkstein@paragonia.com',
            'phone': '+7 (990) 459-32-33',
            'photo': '/assets/img/avatar.jpg'
        },
        {
            'id': '67a09eb98faj372d365e5064',
            'name': 'Austin Wyatt',
            'email': 'austinwyatt@paragonia.com',
            'phone': '+7 (952) 563-38-24',
            'photo': '/assets/img/avatar.jpg'
        },
        {
            'id': '27a09eb98faj372d365e5063',
            'name': 'Lolita Whitney',
            'email': 'lolitawhitney@paragonia.com',
            'phone': '+7 (842) 529-36-86',
            'photo': '/assets/img/avatar.jpg'
        },
        {
            'id': '47a09eb98faj372d365e5063',
            'name': 'Charmaine Richardson',
            'email': 'charmainerichardson@paragonia.com',
            'phone': '+7 (845) 428-28-44',
            'photo': '/assets/img/avatar.jpg'
        },
        {
            'id': '67a09el98faj372d365e5063',
            'name': 'Potter Fuentes',
            'email': 'potterfuentes@paragonia.com',
            'phone': '+7 (916) 562-38-40',
            'photo': '/assets/img/avatar.jpg'
        },
        {
            'id': '67a09eb98faj3l2d365e5063',
            'name': 'Yang Kent',
            'email': 'yangkent@paragonia.com',
            'phone': '+7 (859) 402-32-05',
            'photo': '/assets/img/avatar.jpg'
        },
        {
            'id': '67a09eb98fa7372d365e5063',
            'name': 'Hollie Larson',
            'email': 'hollielarson@paragonia.com',
            'phone': '+7 (879) 428-26-41',
            'photo': '/assets/img/avatar.jpg'
        },
        {
            'id': '67a09e888faj372d365e5063',
            'name': 'Latoya Rush',
            'email': 'latoyarush@paragonia.com',
            'phone': '+7 (876) 589-28-46',
            'photo': '/assets/img/avatar.jpg'
        },
        {
            'id': '67a09eb98faj372d365e3063',
            'name': 'Willa Estrada',
            'email': 'willaestrada@paragonia.com',
            'phone': '+7 (966) 449-38-75',
            'photo': '/assets/img/avatar.jpg'
        },
        {
            'id': '65a09eb98faj372d365e5063',
            'name': 'Heather Kane',
            'email': 'heatherkane@paragonia.com',
            'phone': '+7 (920) 596-29-84',
            'photo': '/assets/img/avatar.jpg'
        }
    ]
}
export let mailbox = {
    /**
     * Возвращает поток из mailbox.
     */
    getMailbox (): Observable<Mailbox> {
        return Observable.of(mailboxData)
            .delay(1000);
    },
    /**
     * Возвращает поток из контакта по id.
     */
    getContact (id: string): Observable<Contact> {
        return Observable.of(mailboxData['contacts'].find((contact: Contact): boolean => {
            return contact.id === id;
        }))
        .delay(1000);
    },
    /**
     * Возвращает поток из массива контактов.
     */
    getContacts (value?: string): Observable<Contact[]> {
        if (value) {
            return Observable.of(mailboxData['contacts'].filter((contact: Contact): boolean => {
                return contact.email.toLowerCase().includes(value.toLowerCase())
                    || contact.name.toLowerCase().includes(value.toLowerCase());
            })).delay(1000);
        } else {
            return Observable.of(mailboxData['contacts']).delay(1000);
        }
    },
    saveContact (newContact: {
        id?: string;
        name: string,
        email: string,
        phone: string,
        photo: string
    }): Observable<boolean> {
        if (newContact.id
            && mailboxData['contacts'].find((contact: Contact): boolean => {
            return contact.id === newContact.id;
        })) {
            return this.updateContact(newContact);
        } else {
            return this.addContact(newContact);
        }
    },
    /**
     * Добавляет контакт.
     */
    addContact (contact: {
        name: string,
        email: string,
        phone: string,
        photo: string
    }): Observable<boolean> {
        return Observable.create((subscriber) => {
            try {
                let newContact: Contact = Object.assign({
                    id: uid()
                }, contact);
                mailboxData['contacts'].push(newContact);
                subscriber.next(true);
                subscriber.complete();
            } catch (err) {
                subscriber.error(err);
            }
        })
        .delay(1000);
    },
    /**
     * Обновляет данные контакта.
     */
    updateContact (updatedContact: Contact): Observable<boolean> {
        return Observable.create((subscriber) => {
            try {
                mailboxData['contacts'] = mailboxData['contacts'].map((contact: Contact): Contact => {
                    if (contact.id !== updatedContact.id) {
                        return contact;
                    } else {
                        return contact = updatedContact;
                    }
                });
                subscriber.next(true);
                subscriber.complete();
            } catch (err) {
                subscriber.error(err);
            }
        })
        .delay(1000);
    },
    /**
     * Удаляет контакт.
     */
    removeContact (id: string): Observable<Contact[]> {
        return Observable.of(mailboxData['contacts'] = mailboxData['contacts'].filter((contact: Contact): boolean => {
            return contact.id !== id;
        }))
        .delay(1000);
    },
}

let lettersArray: Array<Letter> = [
    {
        'id': '58c29ca54bbd9846a8604f7f',
        'type': 'inbox',
        'name': 'Lee Duncan',
        'email': 'leeduncan@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-12-22T02:19:03-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Exercitation sit enim ullamco quis laborum incididunt occaecat fugiat magna. Laborum sunt veniam eiusmod aliquip esse occaecat. Nulla amet quis occaecat ea nulla officia consectetur. Laboris id commodo et culpa aliqua irure officia. Est fugiat do ad elit et ipsum pariatur eiusmod ad tempor ea reprehenderit. Nulla labore aute laboris est culpa reprehenderit et nostrud Lorem aliquip. Fugiat labore aliquip officia reprehenderit sit ipsum dolor labore. Sint sunt amet velit ut est deserunt aliqua. Veniam duis sit sint est aute incididunt sit consectetur voluptate aliquip aliquip ex dolore. Commodo Lorem mollit reprehenderit labore in.'
    },
    {
        'id': '58c29ca5b733a4473af56e08',
        'type': 'inbox',
        'name': 'Corrine Pickett',
        'email': 'corrinepickett@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-02-22T10:39:37-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Ad esse in id commodo deserunt nisi culpa in quis. Laborum sit nulla duis nisi pariatur. Commodo reprehenderit nulla minim do ex. Nulla ut exercitation dolore non commodo in cupidatat irure fugiat sit ut duis. Tempor eiusmod duis minim id mollit deserunt ex magna officia culpa mollit. Laboris in aliquip proident sint officia aute do consequat qui do velit dolor. Dolore dolor non labore dolor duis officia minim veniam pariatur amet. Mollit reprehenderit fugiat aliqua aliquip ut sunt ullamco consequat voluptate nisi incididunt minim pariatur. Commodo irure et consectetur exercitation adipisicing tempor aliqua occaecat id velit elit minim. Proident aliqua reprehenderit eu qui officia nostrud sit culpa.'
    },
    {
        'id': '58c29ca57c0a0b88bddd5b12',
        'type': 'inbox',
        'name': 'Acosta Blankenship',
        'email': 'acostablankenship@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2015-12-05T09:13:45-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Minim in elit cupidatat deserunt reprehenderit occaecat id elit laboris enim labore aliqua est nulla. Deserunt officia fugiat aute irure laborum officia proident qui consectetur consectetur ad laborum Lorem laborum. Ea dolor dolore laborum proident reprehenderit consectetur minim voluptate elit aute consectetur. Deserunt non aliqua ipsum adipisicing duis pariatur. Fugiat irure labore est sunt anim aute ex sit occaecat cupidatat aliquip minim culpa commodo. Quis ex Lorem ex cupidatat est est. Sint sit laborum laboris quis incididunt ullamco anim. Nostrud ut deserunt nostrud elit cupidatat est laborum duis dolore. Veniam elit ut velit cupidatat sit dolore et cillum adipisicing eiusmod ullamco adipisicing non occaecat. Aute aute id occaecat commodo proident.'
    },
    {
        'id': '58c29ca5bb980a23832f8b58',
        'type': 'inbox',
        'name': 'Joy Brooks',
        'email': 'joybrooks@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-11-09T10:19:09-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Eu non officia do sint anim ad ea laborum fugiat est sint do sint non. Ad anim reprehenderit cillum fugiat adipisicing laborum amet velit esse amet. Sint non nisi cupidatat commodo nostrud id consequat aliqua labore. Adipisicing id adipisicing exercitation laboris et. In veniam dolor nostrud amet do aliqua in cupidatat ex nisi. Magna labore qui exercitation in voluptate veniam deserunt ex exercitation mollit qui. Consequat ex culpa magna aliquip nulla sunt. Excepteur commodo aliqua amet amet sit amet magna aute. Laboris do in Lorem duis eiusmod elit sint sunt voluptate ut. Excepteur est nostrud consectetur nisi laboris consectetur sunt aliquip id exercitation fugiat duis et.'
    },
    {
        'id': '58c29ca514caa1ca896a90f2',
        'type': 'inbox',
        'name': 'Gina Nash',
        'email': 'ginanash@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-03-01T06:29:48-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Deserunt non laborum nisi dolore et commodo nisi. Excepteur ullamco incididunt veniam enim in. Dolor amet dolore elit pariatur. Ut eiusmod magna ad tempor minim mollit sunt cupidatat aliquip culpa. Consectetur culpa proident non reprehenderit. Duis elit sit officia magna sint exercitation minim velit ipsum ea. Ut duis eu officia dolore labore nisi est irure irure. Et deserunt id elit adipisicing nulla cillum nostrud mollit aliquip adipisicing irure aliqua. Amet fugiat pariatur quis veniam minim nulla. Irure ullamco voluptate amet sunt sint duis Lorem nostrud reprehenderit labore.'
    },
    {
        'id': '58c29ca5ecaf84b59f59a26c',
        'type': 'inbox',
        'name': 'Lillie Alexander',
        'email': 'lilliealexander@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-04-24T10:30:48-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Velit ex sit ullamco excepteur ex pariatur culpa anim ut. Consectetur Lorem velit ut deserunt incididunt et pariatur. Commodo nostrud cillum irure ullamco dolor excepteur fugiat aute magna dolor et. Aliquip ut aliquip enim voluptate fugiat sunt fugiat pariatur ullamco cillum. Proident quis minim sint laboris veniam est. Ullamco dolore sit reprehenderit ex aliqua aliquip nulla et eiusmod. Officia amet magna deserunt ipsum excepteur officia velit culpa enim excepteur nostrud enim. Fugiat nulla non excepteur occaecat. Qui commodo consequat laborum laboris Lorem consectetur fugiat nulla minim. Aute sint tempor esse proident aliquip reprehenderit ut.'
    },
    {
        'id': '58c29ca5f5acabd0dcaddf3f',
        'type': 'inbox',
        'name': 'Arlene Hurley',
        'email': 'arlenehurley@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-05-25T09:58:36-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Deserunt irure do sunt laborum ipsum ex ut aliquip proident. Veniam aliquip reprehenderit Lorem ea magna aliquip commodo dolor nisi labore proident. Enim tempor nulla veniam dolore sit quis cupidatat. Officia et exercitation veniam ad ut culpa. Amet incididunt sit nulla ullamco amet laborum culpa culpa ipsum do laborum. Consectetur culpa dolor aliqua occaecat irure velit ut non. Aute enim ad laboris eu commodo tempor duis proident ex. Id anim occaecat elit qui do elit anim nulla occaecat laborum ullamco mollit ad sit. Consectetur officia cupidatat commodo tempor veniam. Elit occaecat non aute cupidatat elit dolore excepteur exercitation et laboris laboris aliquip enim culpa.'
    },
    {
        'id': '58c29ca50f64d62d9c606383',
        'type': 'inbox',
        'name': 'Lindsay Santiago',
        'email': 'lindsaysantiago@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-04-10T01:17:44-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Est ullamco qui labore elit amet fugiat labore sit enim laboris. Non esse dolore magna ipsum voluptate qui tempor deserunt do. Aliquip laborum velit ex non anim est reprehenderit. Aliquip adipisicing commodo in fugiat pariatur eu. Ex consectetur consectetur mollit excepteur deserunt ex sunt. Aute minim amet culpa voluptate do ad aute ipsum ipsum enim nostrud esse. Qui id dolore nostrud labore. Elit aute Lorem mollit nostrud amet labore nisi nisi ut occaecat veniam do culpa mollit. Consectetur qui non irure cillum fugiat qui in tempor esse sit pariatur. Ipsum deserunt anim ex voluptate ad dolor laborum minim.'
    },
    {
        'id': '58c29ca5926965e579e47550',
        'type': 'inbox',
        'name': 'Merrill Walters',
        'email': 'merrillwalters@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-02-18T10:20:38-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Eu ea enim commodo velit dolore exercitation consequat in ipsum nulla do. Est aliqua sint nisi dolore anim tempor reprehenderit mollit eu aliqua culpa. Ex ullamco qui excepteur qui. In minim dolore cupidatat ad fugiat tempor veniam dolore consectetur consectetur. Cillum esse ipsum fugiat culpa incididunt veniam cillum aliquip proident amet. Sit officia nostrud fugiat culpa laboris irure aliqua ea magna est quis sit est. Consequat consectetur do laborum anim occaecat irure aute. Velit cupidatat ipsum sit anim qui adipisicing. Dolor nulla aliqua est nulla veniam cupidatat adipisicing id in enim eiusmod in eu. Pariatur officia id in amet exercitation cillum.'
    },
    {
        'id': '58c29ca5a8a30db62794fe12',
        'type': 'inbox',
        'name': 'Dawn Rush',
        'email': 'dawnrush@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-04-13T10:16:26-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Fugiat cillum do id et. Sit exercitation incididunt adipisicing duis irure cupidatat cupidatat officia qui excepteur duis officia. Officia esse est adipisicing aliquip aute quis. Amet irure occaecat ut ipsum sunt in elit. Amet sunt magna et commodo est mollit laborum sit ipsum enim reprehenderit excepteur. Aute eu tempor sit voluptate in. Labore adipisicing laborum cillum nostrud in enim deserunt sit cillum id non. Commodo velit adipisicing fugiat minim voluptate pariatur sit deserunt aliqua. Nisi ipsum duis ea nisi commodo velit velit enim sunt ex culpa consectetur in. Et id ex laborum id dolor culpa aliqua adipisicing ex velit sint.'
    },
    {
        'id': '58c29ca5ebf24d350d8b8dcb',
        'type': 'inbox',
        'name': 'Kerr Henderson',
        'email': 'kerrhenderson@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-01-09T10:45:13-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Ad nulla officia commodo deserunt aute adipisicing laborum sunt in quis est irure. Commodo consectetur deserunt veniam do labore. Qui sunt do elit voluptate sit cupidatat. Excepteur deserunt fugiat mollit amet excepteur incididunt eiusmod occaecat aute anim anim laborum excepteur. Minim ut cillum Lorem eu. Id aliqua qui eiusmod ea ullamco amet sunt officia ut ea exercitation reprehenderit. Cillum sint ullamco nulla cillum labore occaecat culpa. Exercitation ut elit tempor adipisicing ut ipsum nostrud sint id pariatur cupidatat commodo sit commodo. Cupidatat ipsum sunt amet eiusmod est laborum laboris. Labore fugiat nisi sit quis consectetur ut et ex ut commodo.'
    },
    {
        'id': '58c29ca539c8f524264f0705',
        'type': 'inbox',
        'name': 'Renee Calderon',
        'email': 'reneecalderon@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-03-01T08:53:07-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Mollit irure excepteur ullamco id culpa aute nostrud. Sit deserunt reprehenderit magna sit do. Non laboris sint ullamco ex duis labore Lorem enim qui tempor. Dolor deserunt nisi Lorem do culpa aute voluptate. Velit aliqua magna labore quis tempor Lorem cillum adipisicing. Excepteur enim exercitation voluptate consectetur ullamco cupidatat ipsum ex consequat do. Incididunt commodo enim enim veniam Lorem. Consequat exercitation officia nostrud commodo mollit dolor irure quis reprehenderit ullamco. Cillum duis occaecat occaecat ullamco sint aliqua tempor amet est consequat et consectetur elit id. Ullamco Lorem ipsum dolore dolore non aliquip eiusmod eu officia dolor minim aliqua.'
    },
    {
        'id': '58c29ca5033727dbe4984c6e',
        'type': 'inbox',
        'name': 'Christi Carver',
        'email': 'christicarver@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2017-02-08T06:27:53-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Occaecat sint quis commodo quis sunt laboris eu. In labore duis ea qui ipsum cupidatat. Sit ex amet aliquip occaecat reprehenderit in dolor excepteur et sit nulla. Deserunt incididunt quis nulla proident. Ipsum qui eiusmod sint enim sunt nisi quis laboris officia eu dolore. Officia mollit voluptate minim aliqua velit. Deserunt qui est ad eu exercitation ut quis minim exercitation mollit nostrud ad. Adipisicing consequat amet esse minim veniam duis amet ut magna sunt cillum. Non ullamco aute sunt nisi. Id Lorem elit tempor aliqua adipisicing qui nisi duis culpa consequat.'
    },
    {
        'id': '58c29ca5a3c912e3c4982d68',
        'type': 'inbox',
        'name': 'Tucker Castro',
        'email': 'tuckercastro@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2017-03-04T12:17:29-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Id proident cupidatat et ut consequat voluptate officia ad officia. In id est duis enim officia fugiat non duis duis esse do. Mollit id occaecat ea labore id. Velit in officia id officia ea irure do. Est voluptate ipsum aute velit irure reprehenderit nostrud labore sunt duis pariatur excepteur qui minim. Aliqua id laborum veniam elit velit commodo veniam ut. Aliqua cillum enim do consequat ut voluptate sint tempor commodo duis officia cillum adipisicing. Dolore irure ullamco in adipisicing. Sit qui reprehenderit magna excepteur est ullamco commodo reprehenderit aliqua exercitation cillum anim eu dolore. Ad ea ut anim id incididunt aute cupidatat ad anim commodo est est deserunt.'
    },
    {
        'id': '58c29ca5e7e0ec888a6390d8',
        'type': 'inbox',
        'name': 'Jackson Wall',
        'email': 'jacksonwall@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2017-02-28T02:07:50-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Fugiat mollit fugiat consequat reprehenderit incididunt exercitation dolore proident eiusmod eiusmod. Dolor cillum aliqua nulla aliquip pariatur nisi aliquip Lorem cupidatat. Anim reprehenderit reprehenderit id nulla non dolore cupidatat ad commodo culpa anim consectetur. Consectetur amet eu cillum enim culpa incididunt dolor Lorem deserunt proident incididunt. Labore ipsum et deserunt commodo. Aliqua do aliqua laboris labore magna occaecat exercitation Lorem. Deserunt labore aute officia non culpa in in ullamco Lorem. Elit exercitation mollit aliqua adipisicing ex enim elit mollit tempor. Nulla aliqua tempor cillum officia tempor nulla velit nulla. Quis dolore aute nostrud amet pariatur sint est magna.'
    },
    {
        'id': '58c29ca5788358c5789b769e',
        'type': 'inbox',
        'name': 'Selma Palmer',
        'email': 'selmapalmer@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-12-03T02:43:11-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Excepteur sint sunt laboris fugiat veniam veniam amet. Sint excepteur magna cillum non culpa id ex anim anim qui. Consectetur eu tempor qui ea adipisicing in labore adipisicing velit do Lorem reprehenderit id tempor. Voluptate sint fugiat dolor excepteur nulla id sit nisi nulla aute. Ipsum ut culpa in pariatur. Ex sunt est elit consequat non ipsum fugiat eiusmod irure et in. Veniam tempor id deserunt sint cillum voluptate. Consequat commodo nulla est commodo in pariatur incididunt mollit id ex Lorem eiusmod. Ad aliqua nostrud voluptate consectetur et quis. Tempor ea culpa laborum voluptate culpa aute amet voluptate eiusmod laboris fugiat sint nostrud.'
    },
    {
        'id': '58c29ca575d9c7e7a0eede9c',
        'type': 'inbox',
        'name': 'Pansy Hyde',
        'email': 'pansyhyde@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-07-26T09:47:08-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Velit pariatur nostrud labore commodo nisi quis. Enim enim voluptate cillum aliquip. Ipsum in commodo ullamco occaecat. Ipsum commodo consectetur laboris dolore sit. Occaecat proident quis laboris laborum tempor sunt. Et ex sit do ad adipisicing sunt magna et. Cupidatat commodo id eu consequat aliquip eu nostrud sit. Eu amet amet aliqua velit non est dolore est labore ex. Dolor laborum amet veniam sit laboris excepteur dolore. Esse quis et dolore adipisicing officia enim aliquip.'
    },
    {
        'id': '58c29ca5e0ee99baea0b8ace',
        'type': 'inbox',
        'name': 'Waters Hewitt',
        'email': 'watershewitt@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-07-22T10:42:44-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Est ea proident ut nisi dolor. Duis amet elit enim nostrud pariatur consequat aliqua duis amet proident. Occaecat in et pariatur ex veniam mollit laborum mollit qui. Qui voluptate exercitation cupidatat do consectetur velit eu reprehenderit et do. Sint in excepteur nisi ex nostrud cupidatat nostrud quis enim dolore. Sunt eu veniam consequat labore cupidatat laboris excepteur nisi reprehenderit anim mollit nulla. Consectetur sint elit minim excepteur est ullamco qui veniam eu duis fugiat laborum. Magna dolor aliquip magna exercitation anim quis incididunt dolore quis aute anim cillum aute. Eu ullamco nisi voluptate duis laborum dolor do cupidatat deserunt. Proident minim adipisicing magna qui.'
    },
    {
        'id': '58c29ca58bb5ff92135b8695',
        'type': 'inbox',
        'name': 'Jana Floyd',
        'email': 'janafloyd@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-11-20T12:23:09-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Est ex ullamco deserunt esse aliquip cupidatat consectetur est laborum magna enim est. Ipsum velit duis ea incididunt magna proident aliqua irure eu. Nostrud culpa adipisicing amet labore amet incididunt velit Lorem amet minim nisi est. Aliquip in sunt sit minim. Anim esse tempor ea ex enim esse. Proident est mollit veniam adipisicing veniam adipisicing aliqua ullamco. Adipisicing qui pariatur ad aliqua non culpa cupidatat et aliquip incididunt sunt. Aute enim deserunt minim ea. Ipsum elit ad eiusmod minim cillum. Duis officia incididunt ex anim pariatur elit dolor.'
    },
    {
        'id': '58c29ca52ba15c13e1e35efd',
        'type': 'inbox',
        'name': 'Brittney Flowers',
        'email': 'brittneyflowers@sportan.com',
        'addressee': 'user@mail.com',
        'date': new Date('2016-02-22T03:20:48-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Labore sit incididunt et laborum labore ea fugiat do magna pariatur in. Consequat non veniam adipisicing ullamco dolore ex ad dolore cupidatat Lorem. Enim velit cillum quis ex. Sunt adipisicing sunt eiusmod sunt dolore. Lorem elit consequat sit occaecat sunt consectetur occaecat ex non eu esse nisi ut. Aute sit do voluptate pariatur. Nulla anim est amet consequat culpa enim in ad proident dolore Lorem. Sint nisi commodo et fugiat aliquip. Id reprehenderit aliqua reprehenderit nisi proident elit ad irure aute. Eiusmod nisi cillum ullamco exercitation sit.'
    },
    {
        'id': '88c25ca52bd15c15e1e35ef7',
        'type': 'spam',
        'name': 'Brittney Flowers',
        'email': 'brittney@sportan.com',
        'addressee': 'spam@spam.com',
        'date': new Date('2016-02-22T03:20:48-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Labore sit incididunt et laborum labore ea fugiat do magna pariatur in. Consequat non veniam adipisicing ullamco dolore ex ad dolore cupidatat Lorem. Enim velit cillum quis ex. Sunt adipisicing sunt eiusmod sunt dolore. Lorem elit consequat sit occaecat sunt consectetur occaecat ex non eu esse nisi ut. Aute sit do voluptate pariatur. Nulla anim est amet consequat culpa enim in ad proident dolore Lorem. Sint nisi commodo et fugiat aliquip. Id reprehenderit aliqua reprehenderit nisi proident elit ad irure aute. Eiusmod nisi cillum ullamco exercitation sit.',
    },
    {
        'id': '88c25ca52bd15c15e1e35ef8',
        'type': 'spam',
        'name': 'John Smith',
        'email': 'brittney@sportan.com',
        'addressee': 'spam@spam.com',
        'date': new Date('2014-02-22T03:20:48-03:00'),
        'subject': 'Subject of the letter',
        'body': 'Labore sit incididunt et laborum labore ea fugiat do magna pariatur in. Consequat non veniam adipisicing ullamco dolore ex ad dolore cupidatat Lorem. Enim velit cillum quis ex. Sunt adipisicing sunt eiusmod sunt dolore. Lorem elit consequat sit occaecat sunt consectetur occaecat ex non eu esse nisi ut. Aute sit do voluptate pariatur. Nulla anim est amet consequat culpa enim in ad proident dolore Lorem. Sint nisi commodo et fugiat aliquip. Id reprehenderit aliqua reprehenderit nisi proident elit ad irure aute. Eiusmod nisi cillum ullamco exercitation sit.',
    },
    {
        'id': '38c25ca52bd15c19e1e35ef5',
        'type': 'sent',
        'name': 'Alexanger Gulnyashkin',
        'email': 'user@mail.com',
        'addressee': 'someaddressee1@sportan.com',
        'date': new Date('2017-01-22T03:20:48-03:00'),
        'subject': 'Тема письма',
        'body': 'Тело письма',
    },
    {
        'id': '38c25ca52bd15c19e1e35ef6',
        'type': 'sent',
        'name': 'Alexanger Gulnyashkin',
        'email': 'user@mail.com',
        'addressee': 'someaddressee2@sportan.com',
        'date': new Date('2017-01-22T03:20:48-03:00'),
        'subject': 'Тема письма',
        'body': 'Тело письма',
    },
    {
        'id': '38c25ca52bd15c19e1e35ef7',
        'type': 'sent',
        'name': 'Alexanger Gulnyashkin',
        'email': 'user@mail.com',
        'addressee': 'someaddressee3@sportan.com',
        'date': new Date('2017-01-22T03:20:48-03:00'),
        'subject': 'Тема письма',
        'body': 'Тело письма',
    }
];
export let letters = {
    /**
     * Возвращает поток из массива писем определенного типа.
     */
    getLetters (type: string): Observable<Letter[]> {
        return Observable.of(lettersArray.filter((letter: Letter): boolean => {
            return letter.type === type;
        }))
        .delay(1000);
    },
    /**
     * Возвращает поток из письма.
     */
    getLetter (id: string): Observable<Letter> {
        return Observable.of(lettersArray.find((letter: Letter): boolean => {
            return letter.id === id;
        }))
        .delay(1000);
    },
    /**
     * Удаляет письма по id и возвращает поток из массива
     * оставшихся писем определенного типа.
     */
    deleteLetters (ids: Array<string>, type: string): Observable<Letter[]> {
        lettersArray = lettersArray.filter((letter: Letter): boolean => {
            if (!ids.find((id: string): boolean => {
                return letter.id === id;
            })) {
                return true;
            } else {
                return  false;
            }
        });
        return this.getLetters(type);
    },
    /**
     * Помещает письма по id в спам и возвращает поток из массива
     * оставшихся входящих писем.
     */
    markLettersAsSpam (ids: Array<string>): Observable<Letter[]> {
        lettersArray.forEach((letter: Letter): void => {
            if (!ids.find((id: string): boolean => {
                return letter.id === id;
            })) {
                return;
            } else {
                letter.type = 'spam';
            }
        });
        return this.getLetters('inbox');
    },
    /**
     * Помещает письма по id во входящие и возвращает поток из массива
     * оставшихся спам писем.
     */
    markLettersAsNotSpam (ids: Array<string>): Observable<Letter[]> {
        lettersArray.forEach((letter: Letter): void => {
            if (!ids.find((id: string): boolean => {
                return letter.id === id;
            })) {
                return;
            } else {
                letter.type = 'inbox';
            }
        });
        return this.getLetters('spam');
    },
    /**
     * Удаляет письмо по id.
     */
    deleteLetter (id: string): Observable<boolean> {
        return Observable.create((subscriber) => {
            try {
                lettersArray = lettersArray.filter((letter: Letter): boolean => {
                    if (letter.id !== id) {
                        return true;
                    } else {
                        return false;
                    }
                });
                subscriber.next(true);
                subscriber.complete();
            } catch (err) {
                subscriber.error(true);
            }
        })
        .delay(1000);
    },
    /**
     * Помещает письмо по id в спам.
     */
    markLetterAsSpam (id: string): Observable<boolean> {
        return Observable.create((subscriber) => {
            try {
                lettersArray.forEach((letter: Letter): void => {
                    if (letter.id !== id) {
                        return;
                    } else {
                        letter.type = 'spam';
                    }
                });
                subscriber.next(true);
                subscriber.complete();
            } catch (err) {
                subscriber.error(true);
            }
        })
        .delay(1000);
    },
    /**
     * Помещает письмо по id во входящие.
     */
    markLetterAsNotSpam (id: string): Observable<boolean> {
        return Observable.create((subscriber) => {
            try {
                lettersArray.forEach((letter: Letter): void => {
                    if (letter.id !== id) {
                        return;
                    } else {
                        letter.type = 'inbox';
                    }
                });
                subscriber.next(true);
                subscriber.complete();
            } catch (err) {
                subscriber.error(true);
            }
        })
        .delay(1000);
    },
    addLetter (sent): Observable<boolean> {
        console.log('NEW LETTER: ', sent);
        return Observable.create((subscriber): void => {
            try {
                lettersArray.push(Object.assign(sent, {
                    id: uid(),
                    type: 'sent'
                }));
                mailbox.getContacts()
                    .subscribe((contacts: Array<Contact>): void => {
                        console.log('CHECK: IS A NEW CONTACT');
                        if (!contacts.find((contact: Contact) => {
                            return contact.email === sent.addressee;
                        })) {
                            console.log('NEW CONTACT');
                            mailbox.addContact({
                                name: '',
                                email: sent.addressee,
                                phone: '',
                                photo: '/assets/img/avatar.jpg'
                            })
                            .subscribe(() => {
                                subscriber.next(true);
                                subscriber.complete();
                            });
                        } else {
                            subscriber.next(true);
                            subscriber.complete();
                        }
                    });
            } catch (err) {
                subscriber.error(err);
            }
        })
        .delay(1000);
    }
}
