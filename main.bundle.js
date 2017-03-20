webpackJsonp([1,4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mailbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return letters; });


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
var user = {
    'id': '28a89b94fa12372d365e5369',
    'email': 'user@mail.com',
    'password': '123'
};
var mailboxData = {
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
};
var mailbox = {
    /**
     * Возвращает поток из mailbox.
     */
    getMailbox: function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(mailboxData)
            .delay(1000);
    },
    /**
     * Возвращает поток из контакта по id.
     */
    getContact: function (id) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(mailboxData['contacts'].find(function (contact) {
            return contact.id === id;
        }))
            .delay(1000);
    },
    /**
     * Возвращает поток из массива контактов.
     */
    getContacts: function (value) {
        if (value) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(mailboxData['contacts'].filter(function (contact) {
                return contact.email.toLowerCase().includes(value.toLowerCase())
                    || contact.name.toLowerCase().includes(value.toLowerCase());
            })).delay(1000);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(mailboxData['contacts']).delay(1000);
        }
    },
    saveContact: function (newContact) {
        if (newContact.id
            && mailboxData['contacts'].find(function (contact) {
                return contact.id === newContact.id;
            })) {
            return this.updateContact(newContact);
        }
        else {
            return this.addContact(newContact);
        }
    },
    /**
     * Добавляет контакт.
     */
    addContact: function (contact) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (subscriber) {
            try {
                var newContact = Object.assign({
                    id: uid()
                }, contact);
                mailboxData['contacts'].push(newContact);
                subscriber.next(true);
                subscriber.complete();
            }
            catch (err) {
                subscriber.error(err);
            }
        })
            .delay(1000);
    },
    /**
     * Обновляет данные контакта.
     */
    updateContact: function (updatedContact) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (subscriber) {
            try {
                mailboxData['contacts'] = mailboxData['contacts'].map(function (contact) {
                    if (contact.id !== updatedContact.id) {
                        return contact;
                    }
                    else {
                        return contact = updatedContact;
                    }
                });
                subscriber.next(true);
                subscriber.complete();
            }
            catch (err) {
                subscriber.error(err);
            }
        })
            .delay(1000);
    },
    /**
     * Удаляет контакт.
     */
    removeContact: function (id) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(mailboxData['contacts'] = mailboxData['contacts'].filter(function (contact) {
            return contact.id !== id;
        }))
            .delay(1000);
    },
};
var lettersArray = [
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
var letters = {
    /**
     * Возвращает поток из массива писем определенного типа.
     */
    getLetters: function (type) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(lettersArray.filter(function (letter) {
            return letter.type === type;
        }))
            .delay(1000);
    },
    /**
     * Возвращает поток из письма.
     */
    getLetter: function (id) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(lettersArray.find(function (letter) {
            return letter.id === id;
        }))
            .delay(1000);
    },
    /**
     * Удаляет письма по id и возвращает поток из массива
     * оставшихся писем определенного типа.
     */
    deleteLetters: function (ids, type) {
        lettersArray = lettersArray.filter(function (letter) {
            if (!ids.find(function (id) {
                return letter.id === id;
            })) {
                return true;
            }
            else {
                return false;
            }
        });
        return this.getLetters(type);
    },
    /**
     * Помещает письма по id в спам и возвращает поток из массива
     * оставшихся входящих писем.
     */
    markLettersAsSpam: function (ids) {
        lettersArray.forEach(function (letter) {
            if (!ids.find(function (id) {
                return letter.id === id;
            })) {
                return;
            }
            else {
                letter.type = 'spam';
            }
        });
        return this.getLetters('inbox');
    },
    /**
     * Помещает письма по id во входящие и возвращает поток из массива
     * оставшихся спам писем.
     */
    markLettersAsNotSpam: function (ids) {
        lettersArray.forEach(function (letter) {
            if (!ids.find(function (id) {
                return letter.id === id;
            })) {
                return;
            }
            else {
                letter.type = 'inbox';
            }
        });
        return this.getLetters('spam');
    },
    /**
     * Удаляет письмо по id.
     */
    deleteLetter: function (id) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (subscriber) {
            try {
                lettersArray = lettersArray.filter(function (letter) {
                    if (letter.id !== id) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                subscriber.next(true);
                subscriber.complete();
            }
            catch (err) {
                subscriber.error(true);
            }
        })
            .delay(1000);
    },
    /**
     * Помещает письмо по id в спам.
     */
    markLetterAsSpam: function (id) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (subscriber) {
            try {
                lettersArray.forEach(function (letter) {
                    if (letter.id !== id) {
                        return;
                    }
                    else {
                        letter.type = 'spam';
                    }
                });
                subscriber.next(true);
                subscriber.complete();
            }
            catch (err) {
                subscriber.error(true);
            }
        })
            .delay(1000);
    },
    /**
     * Помещает письмо по id во входящие.
     */
    markLetterAsNotSpam: function (id) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (subscriber) {
            try {
                lettersArray.forEach(function (letter) {
                    if (letter.id !== id) {
                        return;
                    }
                    else {
                        letter.type = 'inbox';
                    }
                });
                subscriber.next(true);
                subscriber.complete();
            }
            catch (err) {
                subscriber.error(true);
            }
        })
            .delay(1000);
    },
    addLetter: function (sent) {
        console.log('NEW LETTER: ', sent);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].create(function (subscriber) {
            try {
                lettersArray.push(Object.assign(sent, {
                    id: uid(),
                    type: 'sent'
                }));
                mailbox.getContacts()
                    .subscribe(function (contacts) {
                    console.log('CHECK: IS A NEW CONTACT');
                    if (!contacts.find(function (contact) {
                        return contact.email === sent.addressee;
                    })) {
                        console.log('NEW CONTACT');
                        mailbox.addContact({
                            name: '',
                            email: sent.addressee,
                            phone: '',
                            photo: '/assets/img/avatar.jpg'
                        })
                            .subscribe(function () {
                            subscriber.next(true);
                            subscriber.complete();
                        });
                    }
                    else {
                        subscriber.next(true);
                        subscriber.complete();
                    }
                });
            }
            catch (err) {
                subscriber.error(err);
            }
        })
            .delay(1000);
    }
};
//# sourceMappingURL=app.data.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mailbox_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_data__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LettersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LettersService = (function () {
    function LettersService(_mailboxService) {
        this._mailboxService = _mailboxService;
        this._letters = null;
        this._lettersStream = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this._urlUp = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    /**
     * Возвращает поток, который говорит, подняться вверх по url.
     */
    LettersService.prototype.urlUp = function () {
        console.log('UP');
        if (this._urlUp.closed) {
            this._urlUp = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        }
        return this._urlUp;
    };
    /**
     * Возвращает поток из текущих писем.
     */
    LettersService.prototype.getLetters = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this._letters);
    };
    /**
     * Возвращает поток из массива писем.
     */
    LettersService.prototype.requestLetters = function (mailboxName) {
        var _this = this;
        console.log('SERVER REQUEST');
        __WEBPACK_IMPORTED_MODULE_6__app_data__["b" /* letters */].getLetters(mailboxName)
            .do(function (letters) {
            _this._letters = letters;
        })
            .map(function (letters) {
            return letters.map(function (letter) {
                letter['shortBody'] = _this._makeShortBody(letter);
                return letter;
            });
        })
            .subscribe(function (letters) {
            _this.updateLetters().next(letters);
        });
    };
    /**
     * Возвращает письмо по id.
     */
    LettersService.prototype.getLetter = function (letterId) {
        var _this = this;
        if (this._letters) {
            return this.getLetters()
                .map(function (letters) {
                return _this._fintLetterById(letters, letterId);
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_6__app_data__["b" /* letters */].getLetter(letterId);
        }
    };
    /**
     * Обновление списка писем.
     */
    LettersService.prototype.updateLetters = function () {
        if (this._lettersStream.closed) {
            this._lettersStream = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        }
        return this._lettersStream;
    };
    /**
     * Отправляет письмо.
     */
    LettersService.prototype.sendLetter = function (letter) {
        var _this = this;
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Получаем данные почтового ящика.
        this._mailboxService.getMailbox()
            .subscribe(function (mailbox) {
            // Отправляем письмо
            __WEBPACK_IMPORTED_MODULE_6__app_data__["b" /* letters */].addLetter(Object.assign(letter, {
                date: new Date(),
                name: mailbox.name,
                email: mailbox.email
            }))
                .subscribe(function () {
                console.log('SEND LETTER');
                _this.urlUp().next(true);
            });
        });
    };
    /**
     * Делает краткое содержимое письма.
     */
    LettersService.prototype._makeShortBody = function (letter) {
        return letter.body.slice(0, 100);
    };
    /**
     * Находит письмо по id в массиве писем.
     */
    LettersService.prototype._fintLetterById = function (arr, id) {
        return arr.find(function (letter) {
            return letter.id === id;
        });
    };
    LettersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mailbox_service__["a" /* MailboxService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__mailbox_service__["a" /* MailboxService */]) === 'function' && _a) || Object])
    ], LettersService);
    return LettersService;
    var _a;
}());
//# sourceMappingURL=letters.service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_data__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(_router) {
        this._router = _router;
    }
    /**
     * Проверяет данные ввода и, в случае успеха,
     * добавляет пользователя в localStorage.
     */
    AuthService.prototype.login = function (email, password) {
        return this._auth(email, password)
            .do(function (response) {
            if (response !== '') {
                localStorage.setItem('user', response);
            }
        });
    };
    /**
     * Выход (удаляет пользователя из localStorage
     * и делает редирект).
     */
    AuthService.prototype.logout = function () {
        localStorage.removeItem('user');
        this._router.navigateByUrl('/login');
    };
    /**
     * Проверяет авторизован ли пользователь.
     */
    AuthService.prototype.isAuth = function () {
        if (localStorage.getItem('user')) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(true);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(false);
        }
    };
    /**
     * Отсылает данные входа на сервер (в данном случае,
     * сервером является файл app.data) для проверки.
     */
    AuthService.prototype._auth = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of((__WEBPACK_IMPORTED_MODULE_4__app_data__["c" /* user */].email === email && __WEBPACK_IMPORTED_MODULE_4__app_data__["c" /* user */].password === password) ? __WEBPACK_IMPORTED_MODULE_4__app_data__["c" /* user */].id : '');
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = (function () {
    function SearchService() {
        this._filter = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    SearchService.prototype.filter = function () {
        if (this._filter.closed) {
            this._filter = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        }
        return this._filter;
    };
    SearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SearchService);
    return SearchService;
}());
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_auth_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateService = (function () {
    function CanActivateService(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    CanActivateService.prototype.canActivate = function () {
        var _this = this;
        return this._authService.isAuth()
            .do(function (response) {
            if (response === false) {
                _this._router.navigateByUrl('/login');
            }
        });
    };
    CanActivateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__login_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], CanActivateService);
    return CanActivateService;
    var _a, _b;
}());
//# sourceMappingURL=can-activate.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_authService, _formBuilder, _router) {
        this._authService = _authService;
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.error = false;
        this.loginForm = this._createForm();
    }
    /**
     * Вход в приложение.
     */
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        this._authService.login(email, password)
            .subscribe(function (response) {
            if (response !== '') {
                _this._router.navigateByUrl('/');
            }
            else {
                _this.error = true;
                setTimeout(function () {
                    _this.error = false;
                }, 3000);
            }
        });
    };
    /**
     * Создает модель формы.
     */
    LoginComponent.prototype._createForm = function () {
        return this._formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('')
        });
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(611),
            styles: [__webpack_require__(589)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_contacts_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mailbox_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactFormComponent = (function () {
    function ContactFormComponent(_contactsService, _formBuilder, _activatedRoute, _router, _mailboxService) {
        var _this = this;
        this._contactsService = _contactsService;
        this._formBuilder = _formBuilder;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._mailboxService = _mailboxService;
        // Валидность.
        this.notValidForm = false;
        // Массив потоков.
        this._streams = [];
        var params = this._activatedRoute.params;
        // Добавляем поток в массив потоков.
        this._streams.push(params);
        // Активация роута.
        params
            .pluck('contactId')
            .subscribe(function (contactId) {
            if (contactId) {
                // Говорим, что началась загрузка контента.
                _this._mailboxService.isLoading().next(true);
                // Сохраняем id контакта.
                _this._contactId = contactId;
                // Создает модель формы с данными контакта.
                _this._createContactForm(_this._contactId);
            }
            else {
                // Создает модель формы.
                _this._createBlankForm();
            }
        });
        // Подписываемся на потоки данных.
        this._urlUp(); // Вверх по url.
    }
    /**
     * Событие клика по кнопке добавления контакта.
     */
    ContactFormComponent.prototype.saveContact = function (contact) {
        if (!this.contactForm.valid) {
            this.notValidForm = true;
        }
        else {
            if (this._contactId) {
                this._contactsService.saveContact(Object.assign(contact, {
                    id: this._contactId,
                    photo: '/assets/img/avatar.jpg'
                }));
            }
            else {
                this._contactsService.saveContact(Object.assign(contact, { photo: '/assets/img/avatar.jpg' }));
            }
        }
    };
    /**
     * Создает модель пустой формы.
     */
    ContactFormComponent.prototype._createBlankForm = function () {
        this.contactForm = this._formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(2)]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(/^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i)]),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            photo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]({ value: '/assets/img/avatar.jpg', disabled: true })
        });
        this._valueChanges();
    };
    /**
     * Создает модель заполненной формы.
     */
    ContactFormComponent.prototype._createContactForm = function (contactId) {
        var _this = this;
        // Запрашиваем контакт.
        this._contactsService.getContact(contactId)
            .subscribe(function (contact) {
            // Отменяем состояние загрузки.
            _this._mailboxService.isLoading().next(false);
            // Создаем форму.
            _this.contactForm = _this._formBuilder.group({
                name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](contact.name, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(2)]),
                email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](contact.email, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(/^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i)]),
                phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](contact.phone),
                photo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]({ value: '/assets/img/avatar.jpg', disabled: true })
            });
            _this._valueChanges();
        });
    };
    /**
     * Подписывает на изменения значения формы.
     */
    ContactFormComponent.prototype._valueChanges = function () {
        var _this = this;
        var valueChanges = this.contactForm.valueChanges;
        // Добавляем поток в массив потоков.
        this._streams.push(valueChanges);
        // Подписываемся на изменения полей формы.
        valueChanges
            .subscribe(function () {
            _this.notValidForm = false;
        });
    };
    /**
     * Подписывается на то, чтобы подняться вверх по url.
     */
    ContactFormComponent.prototype._urlUp = function () {
        var _this = this;
        var up = this._contactsService.urlUp();
        // Добавляем поток в массив потоков.
        this._streams.push(up);
        // Подписываемся на поток.
        up
            .subscribe(function () {
            console.log('UP!');
            if (_this._contactId) {
                _this._router.navigate(['../../'], { relativeTo: _this._activatedRoute });
            }
            else {
                _this._router.navigate(['../'], { relativeTo: _this._activatedRoute });
            }
        });
        return this;
    };
    ContactFormComponent.prototype.ngOnDestroy = function () {
        console.log(this._streams.length + ' STREAMS WERE UNSUBSCRIBED');
        this._streams.forEach(function (stream) {
            stream.unsubscribe();
        });
    };
    ContactFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-contact-form',
            template: __webpack_require__(612),
            styles: [__webpack_require__(590)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__contacts_contacts_service__["a" /* ContactsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__contacts_contacts_service__["a" /* ContactsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__mailbox_service__["a" /* MailboxService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__mailbox_service__["a" /* MailboxService */]) === 'function' && _e) || Object])
    ], ContactFormComponent);
    return ContactFormComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=contact-form.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacts_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_search_search_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mailbox_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsComponent = (function () {
    function ContactsComponent(_contactsService, _searchService, _mailboxService) {
        this._contactsService = _contactsService;
        this._searchService = _searchService;
        this._mailboxService = _mailboxService;
        // Флаг, показывающий, идет загрузка или нет.
        this.isLoading = false;
        // Массив потоков.
        this._streams = [];
        console.log('CONTACTS IS CREATED');
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        this.isLoading = true;
        // Запрашиваем контакты.
        this._requestContacts();
        // Подписываемся на потоки данных.
        this._updateContacts() // Обновление списка контактов,
            ._filter(); // Фильтры.
    }
    /**
     * Запрашивает контакты.
     */
    ContactsComponent.prototype._requestContacts = function () {
        this._contactsService.requestContacts();
    };
    /**
     * Подписывается на поток контактов.
     */
    ContactsComponent.prototype._updateContacts = function () {
        var _this = this;
        var updater = this._contactsService.updateContacts();
        // Добавляем поток в массив потоков.
        this._streams.push(updater);
        // Подписываемся на поток.
        updater
            .subscribe(function (contacts) {
            console.log(_this.contacts);
            console.log('DATA WERE UPDATED');
            // Получаем контакты.
            _this.contacts = contacts;
            // Отменяем состояние загрузки.
            _this._mailboxService.isLoading().next(false);
            _this.isLoading = false;
        });
        return this;
    };
    /**
     * Подписывается на поток фильтров поиска.
     */
    ContactsComponent.prototype._filter = function () {
        var _this = this;
        var filter = this._searchService.filter();
        // Добавляем поток в массив потоков.
        this._streams.push(filter);
        // Подписываемся на поток.
        filter
            .subscribe(function (filter) {
            // Получаем фильтр для поиска из поле поиска.
            _this.filterForContacts = filter;
        });
        return this;
    };
    ContactsComponent.prototype.ngOnDestroy = function () {
        console.log(this._streams.length + ' STREAMS WERE UNSUBSCRIBED');
        this._streams.forEach(function (stream) {
            stream.unsubscribe();
        });
    };
    ContactsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__(615),
            styles: [__webpack_require__(593)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contacts_service__["a" /* ContactsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contacts_service__["a" /* ContactsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__menu_search_search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__menu_search_search_service__["a" /* SearchService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__mailbox_service__["a" /* MailboxService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__mailbox_service__["a" /* MailboxService */]) === 'function' && _c) || Object])
    ], ContactsComponent);
    return ContactsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__letters_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mailbox_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_tools_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LetterComponent = (function () {
    function LetterComponent(_activatedRoute, _lettersService, _toolsService, _mailboxService, _router) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this._lettersService = _lettersService;
        this._toolsService = _toolsService;
        this._mailboxService = _mailboxService;
        this._router = _router;
        // Массив потоков.
        this._streams = [];
        console.log('LETTER IS CREATED');
        var params = this._activatedRoute.params;
        // Добавляем поток в массив потоков.
        this._streams.push(params);
        // Активация роута.
        params
            .subscribe(function (params) {
            // Говорим, что началась загрузка контента.
            _this._mailboxService.isLoading().next(true);
            // Сохраняем имя открытого роута.
            _this.mailboxName = params['mailboxName'];
            // Сохраняем id письма.
            _this.letterId = params['letterId'];
            // Загружаем письмо по его id.
            _this._lettersService.getLetter(_this.letterId)
                .subscribe(function (letter) {
                // Сохраняем письмо.
                _this.letter = letter;
                // Говорим, что загрузка завершена.
                _this._mailboxService.isLoading().next(false);
            });
        });
        // Подписываемся на потоки данных.
        this._updatePage() // Обновление страницы,
            ._urlUp(); // Вверх по url.
    }
    /**
     * Подписывается на обновления страницы.
     */
    LetterComponent.prototype._updatePage = function () {
        var _this = this;
        var pageUpdater = this._mailboxService.updatePage();
        // Добавляем поток в массив потоков.
        this._streams.push(pageUpdater);
        // Подписываемся на поток.
        pageUpdater
            .subscribe(function () {
            _this._router.navigateByUrl('./../');
        });
        return this;
    };
    /**
     * Подписываемся на то, чтобы подняться вверх по url.
     */
    LetterComponent.prototype._urlUp = function () {
        var _this = this;
        var up = this._toolsService.urlUp();
        // Добавляем поток в массив потоков.
        this._streams.push(up);
        // Подписываемся на поток.
        up
            .subscribe(function () {
            _this._router.navigate(['../'], { relativeTo: _this._activatedRoute });
        });
        return this;
    };
    LetterComponent.prototype.ngOnDestroy = function () {
        console.log(this._streams.length + ' STREAMS WERE UNSUBSCRIBED');
        this._streams.forEach(function (stream) {
            stream.unsubscribe();
        });
    };
    LetterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-letter',
            template: __webpack_require__(617),
            styles: [__webpack_require__(595)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__letters_service__["a" /* LettersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__letters_service__["a" /* LettersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__tools_tools_service__["a" /* ToolsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__tools_tools_service__["a" /* ToolsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__mailbox_service__["a" /* MailboxService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__mailbox_service__["a" /* MailboxService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], LetterComponent);
    return LetterComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=letter.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__letters_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_search_search_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mailbox_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_tools_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LettersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LettersComponent = (function () {
    function LettersComponent(_lettersService, _toolsService, _searchService, _mailboxService, _router, _activatedRoute) {
        var _this = this;
        this._lettersService = _lettersService;
        this._toolsService = _toolsService;
        this._searchService = _searchService;
        this._mailboxService = _mailboxService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        // Флаг, показывающий, идет загрузка или нет.
        this.isLoading = false;
        // Флаг, показывающий, выделены ли все письма или нет.
        this.checkedAll = false;
        // Массив потоков.
        this._streams = [];
        console.log('MAILBOX IS CREATED');
        var params = this._activatedRoute.params;
        // Добавляем поток в массив потоков.
        this._streams.push(params);
        // Активация роута.
        params
            .pluck('mailboxName')
            .subscribe(function (mailboxName) {
            console.log('NEW PARAMS');
            // Очищаем массив писем.
            _this.letters = [];
            // Очищаем массив выбранных писем.
            _this._toolsService.clearSelected();
            // Говорим, что началась загрузка контента.
            _this._mailboxService.isLoading().next(true);
            _this.isLoading = true;
            // Определяем почтовый ящик.
            _this.mailboxName = mailboxName;
            console.log('MAILBOX: ' + _this.mailboxName);
            // Запрашиваем письма.
            _this._requestLetters();
        });
        // Подписываемся на потоки данных.
        this._updateLetters() // Обновление списка писем,
            ._filter() // Фильтры,
            ._updatePage() // Обновление страницы,
            ._onCheckedAll(); // Выбор всех писем.
    }
    /**
     * Добавляет письмо в список выбранных к действию.
     * или, наоборот, удаляет из него.
     */
    LettersComponent.prototype.onSelect = function (checked, letterId) {
        if (checked === true) {
            this._toolsService.addToSelected(letterId);
        }
        else {
            this._toolsService.removeFromSelected(letterId);
        }
    };
    /**
     * Запрашивает письма для данного почтового ящика.
     */
    LettersComponent.prototype._requestLetters = function () {
        this._lettersService.requestLetters(this.mailboxName);
    };
    /**
     * Подписывается на поток писем.
     */
    LettersComponent.prototype._updateLetters = function () {
        var _this = this;
        var updater = this._lettersService.updateLetters();
        // Добавляем поток в массив потоков.
        this._streams.push(updater);
        // Подписываемся на поток.
        updater
            .subscribe(function (letters) {
            console.log('DATA WERE UPDATED');
            // Получаем письма.
            _this.letters = letters;
            // Отменяем состояние загрузки.
            _this._mailboxService.isLoading().next(false);
            _this.isLoading = false;
        });
        return this;
    };
    /**
     * Подписывается на поток фильтров поиска.
     */
    LettersComponent.prototype._filter = function () {
        var _this = this;
        var filter = this._searchService.filter();
        // Добавляем поток в массив потоков.
        this._streams.push(filter);
        // Подписываемся на поток.
        filter
            .subscribe(function (filter) {
            // Получаем фильтр для поиска из поле поиска.
            _this.filterForLetters = filter;
        });
        return this;
    };
    /**
     * Подписывается на обновления страницы.
     */
    LettersComponent.prototype._updatePage = function () {
        var _this = this;
        var pageUpdater = this._mailboxService.updatePage();
        // Добавляем поток в массив потоков.
        this._streams.push(pageUpdater);
        // Подписываемся на поток.
        pageUpdater
            .subscribe(function () {
            _this._requestLetters();
        });
        return this;
    };
    /**
     * Подписывается на выделение всех писем.
     */
    LettersComponent.prototype._onCheckedAll = function () {
        var _this = this;
        var allChecker = this._toolsService.checkedAll();
        // Добавляем поток в массив потоков.
        this._streams.push(allChecker);
        // Подписываемся на поток.
        allChecker
            .subscribe(function (checkedAll) {
            _this.checkedAll = checkedAll;
        });
        return this;
    };
    LettersComponent.prototype.ngOnDestroy = function () {
        console.log(this._streams.length + ' STREAMS WERE UNSUBSCRIBED');
        this._streams.forEach(function (stream) {
            stream.unsubscribe();
        });
    };
    LettersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-letters',
            template: __webpack_require__(618),
            styles: [__webpack_require__(596)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__letters_service__["a" /* LettersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__letters_service__["a" /* LettersService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__tools_tools_service__["a" /* ToolsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__tools_tools_service__["a" /* ToolsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__menu_search_search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__menu_search_search_service__["a" /* SearchService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__mailbox_service__["a" /* MailboxService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__mailbox_service__["a" /* MailboxService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _f) || Object])
    ], LettersComponent);
    return LettersComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=letters.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mailbox_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pluck__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pluck__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MailboxComponent = (function () {
    function MailboxComponent(_activatedRoute, _router, _mailboxService) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._mailboxService = _mailboxService;
        this._mailboxService.getMailbox()
            .subscribe(function (mailbox) {
            _this.mailbox = mailbox;
        });
        // Индикатор загрузки
        this._mailboxService.isLoading()
            .subscribe(function (isLoading) {
            _this.loading = isLoading;
        });
    }
    /**
     * Обновляет данные.
     */
    MailboxComponent.prototype.updatePage = function () {
        this.loading = true;
        this._mailboxService.updatePage().next(true);
    };
    MailboxComponent.prototype.ngOnInit = function () { };
    MailboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-mailbox',
            template: __webpack_require__(619),
            styles: [__webpack_require__(597)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__mailbox_service__["a" /* MailboxService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__mailbox_service__["a" /* MailboxService */]) === 'function' && _c) || Object])
    ], MailboxComponent);
    return MailboxComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=mailbox.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

//# sourceMappingURL=mailbox.interface.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__letters_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_contacts_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLetterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewLetterComponent = (function () {
    function NewLetterComponent(_lettersService, _contactsService, _formBuilder, _activatedRoute, _router) {
        var _this = this;
        this._lettersService = _lettersService;
        this._contactsService = _contactsService;
        this._formBuilder = _formBuilder;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        // Валидность.
        this.notValidForm = false;
        // Возможные контакты.
        this.possibleContacts = null;
        // Массив потоков.
        this._streams = [];
        // Создает модель формы.
        this.newLetterForm = this._createForm();
        // Сохраняем поле адреса получателя.
        this.addressee = this.newLetterForm.controls['addressee'];
        var valueChanges = this.addressee.valueChanges;
        // Добавляем поток в массив потоков.
        this._streams.push(valueChanges);
        // Подписка на изменения поля addressee.
        valueChanges
            .subscribe(function (value) {
            // Убираем ошибки.
            _this.notValidForm = false;
            // Получаем потенциальных получателей из контактов.
            _this._contactsService.getContactsByValue(value)
                .subscribe(function (contacts) {
                _this.possibleContacts = contacts;
                if (_this.possibleContacts[0] === undefined) {
                    _this.possibleContacts = null;
                }
            });
        });
        // Подписываемся на потоки данных.
        this._urlUp(); // Вверх по url.
    }
    /**
     * Отправка письма.
     */
    NewLetterComponent.prototype.sendLetter = function (letter) {
        if (!this.newLetterForm.valid) {
            this.notValidForm = true;
        }
        else {
            this._lettersService.sendLetter(letter);
        }
    };
    /**
     * Выбор контакта.
     */
    NewLetterComponent.prototype.selectContact = function (contact) {
        this.newLetterForm.controls['addressee'].setValue(contact.email, { emitEvent: false });
        this.possibleContacts = null;
    };
    /**
     * Наружний клик.
     */
    NewLetterComponent.prototype.outsideClick = function () {
        this.possibleContacts = null;
    };
    /**
     * Создает модель формы.
     */
    NewLetterComponent.prototype._createForm = function () {
        return this._formBuilder.group({
            addressee: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(/^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i)]),
            subject: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3)]),
            body: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('')
        });
    };
    /**
     * Подписываемся на то, чтобы подняться вверх по url.
     */
    NewLetterComponent.prototype._urlUp = function () {
        var _this = this;
        var up = this._lettersService.urlUp();
        // Добавляем поток в массив потоков.
        this._streams.push(up);
        // Подписываемся на поток.
        up
            .subscribe(function () {
            console.log('REDIRECT');
            _this._router.navigate(['../../', 'letters', 'sent'], { relativeTo: _this._activatedRoute });
        });
        return this;
    };
    NewLetterComponent.prototype.ngOnDestroy = function () {
        console.log(this._streams.length + ' STREAMS WERE UNSUBSCRIBED');
        this._streams.forEach(function (stream) {
            stream.unsubscribe();
        });
    };
    NewLetterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-new-letter',
            template: __webpack_require__(623),
            styles: [__webpack_require__(601)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__letters_service__["a" /* LettersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__letters_service__["a" /* LettersService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__contacts_contacts_service__["a" /* ContactsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__contacts_contacts_service__["a" /* ContactsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], NewLetterComponent);
    return NewLetterComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=new-letter.component.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_data__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailboxService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailboxService = (function () {
    function MailboxService() {
        this._loading = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._updatePage = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    /**
     * Обновление страницы.
     */
    MailboxService.prototype.updatePage = function () {
        if (this._updatePage.closed) {
            this._updatePage = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        }
        return this._updatePage;
    };
    /**
     * Поток для индикатора загрузки.
     */
    MailboxService.prototype.isLoading = function () {
        if (this._loading.closed) {
            this._loading = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        }
        return this._loading;
    };
    /**
     * Возвращает почтовый ящик.
     */
    MailboxService.prototype.getMailbox = function () {
        return __WEBPACK_IMPORTED_MODULE_2__app_data__["a" /* mailbox */].getMailbox();
    };
    MailboxService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], MailboxService);
    return MailboxService;
}());
//# sourceMappingURL=mailbox.service.js.map

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 392;


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(534);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__letters_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mailbox_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_data__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToolsService = (function () {
    function ToolsService(_lettersService, _mailboxService, _activatedRoute) {
        this._lettersService = _lettersService;
        this._mailboxService = _mailboxService;
        this._activatedRoute = _activatedRoute;
        this._checkedAll = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this._urlUp = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this._selectedLettersIds = [];
    }
    /**
     * Добавляет письмо(а) в список выбранных к действию.
     */
    ToolsService.prototype.addToSelected = function (letterId) {
        if (!letterId) {
            this._addAllToSelected()
                .checkedAll().next(true);
        }
        else {
            this._selectedLettersIds.push(letterId);
        }
        console.log(this._selectedLettersIds);
        return this;
    };
    /**
     * Удаляет письмо(а) из списка выбранных к действию.
     */
    ToolsService.prototype.removeFromSelected = function (letterId) {
        if (!letterId) {
            this.clearSelected();
        }
        else {
            this._spliceSelected(this._findSelectedById(letterId));
        }
        console.log(this._selectedLettersIds);
        return this;
    };
    /**
     * Очищает список выбранных.
     */
    ToolsService.prototype.clearSelected = function () {
        this._selectedLettersIds = [];
        this.checkedAll().next(false);
        return this;
    };
    /**
     * Удаляет выделенные письма.
     */
    ToolsService.prototype.deleteSelectedLetters = function (mailboxName) {
        var _this = this;
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Отправляем на сервер массив id писем на удаление.
        __WEBPACK_IMPORTED_MODULE_5__app_data__["b" /* letters */].deleteLetters(this._selectedLettersIds, mailboxName)
            .subscribe(function (restLetters) {
            // Обновляет письма.
            _this._lettersService.updateLetters().next(restLetters);
            // Убираем пометку со всех писем.
            _this.checkedAll().next(false);
        });
        return this;
    };
    /**
     * Перемещает выделенные письма в спам.
     */
    ToolsService.prototype.markSelectedLettersAsSpam = function () {
        var _this = this;
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Отправляем на сервер массив id писем для помещение в спам.
        __WEBPACK_IMPORTED_MODULE_5__app_data__["b" /* letters */].markLettersAsSpam(this._selectedLettersIds)
            .subscribe(function (restLetters) {
            // Обновляет письма.
            _this._lettersService.updateLetters().next(restLetters);
            // Убираем пометку со всех писем.
            _this.checkedAll().next(false);
        });
        return this;
    };
    /**
     * Перемещает выделенные письма из спама.
     */
    ToolsService.prototype.markSelectedLettersAsNotSpam = function () {
        var _this = this;
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Отправляем на сервер массив id писем для перемещения из спама.
        __WEBPACK_IMPORTED_MODULE_5__app_data__["b" /* letters */].markLettersAsNotSpam(this._selectedLettersIds)
            .subscribe(function (restLetters) {
            // Обновляет письма.
            _this._lettersService.updateLetters().next(restLetters);
            // Убираем пометку со всех писем.
            _this.checkedAll().next(false);
        });
        return this;
    };
    /**
     * Возвращает поток, который говорит, подняться вверх по url.
     */
    ToolsService.prototype.urlUp = function () {
        if (this._urlUp.closed) {
            this._urlUp = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        }
        return this._urlUp;
    };
    /**
     * Удаляет письмo.
     */
    ToolsService.prototype.deleteLetter = function (letterId) {
        var _this = this;
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Отправляем на сервер id письма на удаление.
        __WEBPACK_IMPORTED_MODULE_5__app_data__["b" /* letters */].deleteLetter(letterId)
            .subscribe(function () {
            _this.urlUp().next(true);
        });
        return this;
    };
    /**
     * Перемещает письмо в спам.
     */
    ToolsService.prototype.markLetterAsSpam = function (letterId) {
        var _this = this;
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Отправляем на сервер id письма для помещение в спам.
        __WEBPACK_IMPORTED_MODULE_5__app_data__["b" /* letters */].markLetterAsSpam(letterId)
            .subscribe(function () {
            _this.urlUp().next(true);
        });
        return this;
    };
    /**
     * Перемещает письмо во входящие.
     */
    ToolsService.prototype.markLetterAsNotSpam = function (letterId) {
        var _this = this;
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Отправляем на сервер id письма для помещение в спам.
        __WEBPACK_IMPORTED_MODULE_5__app_data__["b" /* letters */].markLetterAsNotSpam(letterId)
            .subscribe(function () {
            _this.urlUp().next(true);
        });
        return this;
    };
    /**
     * Возвращает поток, который говорит, помечены ли все письма или нет.
     */
    ToolsService.prototype.checkedAll = function () {
        if (this._checkedAll.closed) {
            this._checkedAll = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        }
        return this._checkedAll;
    };
    /**
     * Добавляет все письма в массив выделенных.
     */
    ToolsService.prototype._addAllToSelected = function () {
        var _this = this;
        this.clearSelected();
        this._lettersService.getLetters()
            .subscribe(function (letters) {
            letters.forEach(function (letter) {
                _this._selectedLettersIds.push(letter.id);
            });
        });
        return this;
    };
    /**
     * Находит индекс письма в массиве выделенных по letterId.
     */
    ToolsService.prototype._findSelectedById = function (letterId) {
        return this._selectedLettersIds
            .findIndex(function (id) {
            return id === letterId;
        });
    };
    /**
     * Удаляет письмо из массива выделенных.
     */
    ToolsService.prototype._spliceSelected = function (index) {
        this._selectedLettersIds.splice(index, 1);
        return this;
    };
    ToolsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__letters_service__["a" /* LettersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__letters_service__["a" /* LettersService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__mailbox_service__["a" /* MailboxService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__mailbox_service__["a" /* MailboxService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], ToolsService);
    return ToolsService;
    var _a, _b, _c;
}());
//# sourceMappingURL=tools.service.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(610),
            styles: [__webpack_require__(588)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mailbox_mailbox_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mailbox_folders_folders_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mailbox_letter_letter_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mailbox_menu_menu_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mailbox_menu_search_search_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mailbox_tools_inbox_tools_inbox_tools_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mailbox_new_letter_new_letter_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mailbox_contacts_contacts_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mailbox_contacts_contact_contact_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__mailbox_menu_user_thumb_user_thumb_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__mailbox_tools_sent_tools_sent_tools_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__mailbox_tools_spam_tools_spam_tools_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__mailbox_letters_letters_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__mailbox_tools_tools_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__mailbox_tools_inbox_letter_tools_inbox_letter_tools_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__mailbox_tools_sent_letter_tools_sent_letter_tools_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__mailbox_tools_spam_letter_tools_spam_letter_tools_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__mailbox_contacts_contacts_tools_contacts_tools_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__mailbox_contact_form_contact_form_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__mailbox_new_letter_outside_click_directive__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__can_activate_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__login_auth_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__mailbox_mailbox_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__mailbox_menu_search_search_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__mailbox_letters_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__mailbox_tools_tools_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__mailbox_contacts_contacts_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__mailbox_letter_date_pipe__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__mailbox_letters_letter_filter_pipe__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__mailbox_letters_sort_pipe__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__mailbox_letters_no_letters_pipe__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__mailbox_contacts_contact_filter_pipe__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__app_routes__ = __webpack_require__(512);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__mailbox_mailbox_component__["a" /* MailboxComponent */],
                __WEBPACK_IMPORTED_MODULE_9__mailbox_letter_letter_component__["a" /* LetterComponent */],
                __WEBPACK_IMPORTED_MODULE_34__mailbox_letter_date_pipe__["a" /* LetterDatePipe */],
                __WEBPACK_IMPORTED_MODULE_10__mailbox_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__mailbox_folders_folders_component__["a" /* FoldersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__mailbox_menu_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_35__mailbox_letters_letter_filter_pipe__["a" /* LetterFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_12__mailbox_tools_inbox_tools_inbox_tools_component__["a" /* InboxToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__mailbox_new_letter_new_letter_component__["a" /* NewLetterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__mailbox_contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__mailbox_contacts_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_26__mailbox_new_letter_outside_click_directive__["a" /* OutsideClickDirective */],
                __WEBPACK_IMPORTED_MODULE_16__mailbox_menu_user_thumb_user_thumb_component__["a" /* UserThumbComponent */],
                __WEBPACK_IMPORTED_MODULE_17__mailbox_tools_sent_tools_sent_tools_component__["a" /* SentToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__mailbox_tools_spam_tools_spam_tools_component__["a" /* SpamToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_36__mailbox_letters_sort_pipe__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_19__mailbox_letters_letters_component__["a" /* LettersComponent */],
                __WEBPACK_IMPORTED_MODULE_20__mailbox_tools_tools_component__["a" /* ToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__mailbox_tools_inbox_letter_tools_inbox_letter_tools_component__["a" /* InboxLetterToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__mailbox_tools_sent_letter_tools_sent_letter_tools_component__["a" /* SentLetterToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__mailbox_tools_spam_letter_tools_spam_letter_tools_component__["a" /* SpamLetterToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_37__mailbox_letters_no_letters_pipe__["a" /* NoLettersPipe */],
                __WEBPACK_IMPORTED_MODULE_24__mailbox_contacts_contacts_tools_contacts_tools_component__["a" /* ContactsToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__mailbox_contact_form_contact_form_component__["a" /* ContactFormComponent */],
                __WEBPACK_IMPORTED_MODULE_38__mailbox_contacts_contact_filter_pipe__["a" /* ContactFilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_39__app_routes__["a" /* appRoutes */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__can_activate_service__["a" /* CanActivateService */],
                __WEBPACK_IMPORTED_MODULE_28__login_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_29__mailbox_mailbox_service__["a" /* MailboxService */],
                __WEBPACK_IMPORTED_MODULE_30__mailbox_menu_search_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_31__mailbox_letters_service__["a" /* LettersService */],
                __WEBPACK_IMPORTED_MODULE_32__mailbox_tools_tools_service__["a" /* ToolsService */],
                __WEBPACK_IMPORTED_MODULE_33__mailbox_contacts_contacts_service__["a" /* ContactsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mailbox_mailbox_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__can_activate_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mailbox_mailbox_routes__ = __webpack_require__(522);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });




var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'mailbox',
        component: __WEBPACK_IMPORTED_MODULE_0__mailbox_mailbox_component__["a" /* MailboxComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__can_activate_service__["a" /* CanActivateService */]],
        children: __WEBPACK_IMPORTED_MODULE_3__mailbox_mailbox_routes__["a" /* mailboxRoutes */]
    },
    {
        path: '**',
        redirectTo: 'mailbox'
    },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactFilterPipe = (function () {
    function ContactFilterPipe() {
    }
    ContactFilterPipe.prototype.transform = function (contacts, filter) {
        if (!filter) {
            return contacts;
        }
        filter = filter.toLowerCase();
        return contacts.filter(function (contact) {
            if (contact.name.toLowerCase().includes(filter)) {
                return true;
            }
            else if (contact.email.toLowerCase().includes(filter)) {
                return true;
            }
            else if (contact.phone.toLowerCase().includes(filter)) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    ContactFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
            name: 'contactFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], ContactFilterPipe);
    return ContactFilterPipe;
}());
//# sourceMappingURL=contact-filter.pipe.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacts_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_interface__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__contact_interface__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(_contactsService) {
        this._contactsService = _contactsService;
    }
    /**
     * Обработчик клика по кнопке удаления.
     */
    ContactComponent.prototype.onDelete = function () {
        this._contactsService.removeContact(this.contact.id);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__contact_interface__["Contact"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__contact_interface__["Contact"]) === 'function' && _a) || Object)
    ], ContactComponent.prototype, "contact", void 0);
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(613),
            styles: [__webpack_require__(591)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__contacts_service__["a" /* ContactsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contacts_service__["a" /* ContactsService */]) === 'function' && _b) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a, _b;
}());
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

//# sourceMappingURL=contact.interface.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contacts_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactsToolsComponent = (function () {
    function ContactsToolsComponent(_contactsService) {
        this._contactsService = _contactsService;
    }
    ContactsToolsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-contacts-tools',
            template: __webpack_require__(614),
            styles: [__webpack_require__(592)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__contacts_service__["a" /* ContactsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__contacts_service__["a" /* ContactsService */]) === 'function' && _a) || Object])
    ], ContactsToolsComponent);
    return ContactsToolsComponent;
    var _a;
}());
//# sourceMappingURL=contacts-tools.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoldersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoldersComponent = (function () {
    function FoldersComponent() {
    }
    FoldersComponent.prototype.ngOnInit = function () { };
    FoldersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-folders',
            template: __webpack_require__(616),
            styles: [__webpack_require__(594)]
        }), 
        __metadata('design:paramtypes', [])
    ], FoldersComponent);
    return FoldersComponent;
}());
//# sourceMappingURL=folders.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterDatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LetterDatePipe = (function () {
    function LetterDatePipe() {
    }
    LetterDatePipe.prototype.transform = function (date) {
        var nowMs = Date.now(), letterDate = new Date(date), letterMs = letterDate.getTime(), difference = nowMs - letterMs, oneYear = 1000 * 60 * 60 * 24 * 365, oneDay = 1000 * 60 * 60 * 24, months = ['Янв', 'Фев', 'Мар', 'Апр', 'Мая', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
        if (difference >= oneYear) {
            return "" + letterDate.getFullYear();
        }
        else if (difference >= oneDay) {
            var day = letterDate.getDate(), dayStr = void 0;
            if (day < 10)
                dayStr = '0' + day;
            else
                dayStr = '' + day;
            return day + " " + months[letterDate.getMonth()];
        }
        var hours = letterDate.getHours(), hoursStr;
        if (hours < 10)
            hoursStr = '0' + hours;
        else
            hoursStr = '' + hours;
        var minutes = letterDate.getMinutes(), minutesStr;
        if (minutes < 10)
            minutesStr = '0' + minutes;
        else
            minutesStr = '' + minutes;
        return hoursStr + ":" + minutesStr;
    };
    LetterDatePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
            name: 'letterDate'
        }), 
        __metadata('design:paramtypes', [])
    ], LetterDatePipe);
    return LetterDatePipe;
}());
//# sourceMappingURL=letter-date.pipe.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LetterFilterPipe = (function () {
    function LetterFilterPipe() {
    }
    LetterFilterPipe.prototype.transform = function (letters, filter) {
        if (!filter) {
            return letters;
        }
        filter = filter.toLowerCase();
        var dateOptions = {
            era: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        return letters.filter(function (letter) {
            if (letter.name.toLowerCase().includes(filter)) {
                return true;
            }
            else if (letter.email.toLowerCase().includes(filter)) {
                return true;
            }
            else if (letter.addressee.toLowerCase().includes(filter)) {
                return true;
            }
            else if (letter.date.toLocaleString('ru', dateOptions).toLowerCase().includes(filter)) {
                return true;
            }
            else if (letter.subject.toLowerCase().includes(filter)) {
                return true;
            }
            else if (letter.shortBody.toLowerCase().includes(filter)) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    LetterFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
            name: 'letterFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], LetterFilterPipe);
    return LetterFilterPipe;
}());
//# sourceMappingURL=letter-filter.pipe.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoLettersPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoLettersPipe = (function () {
    function NoLettersPipe() {
    }
    NoLettersPipe.prototype.transform = function (mailboxName) {
        switch (mailboxName) {
            case 'inbox':
                return 'У вас нет входящих писем!';
            case 'sent':
                return 'У вас нет исходящих писем!';
            case 'spam':
                return 'У вас нет спама!';
        }
    };
    NoLettersPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
            name: 'noLetters'
        }), 
        __metadata('design:paramtypes', [])
    ], NoLettersPipe);
    return NoLettersPipe;
}());
//# sourceMappingURL=no-letters.pipe.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (letters, sortBy) {
        if (sortBy === 'date') {
            return letters.sort(function (a, b) {
                if (a.date >= b.date)
                    return -1;
                return 1;
            });
        }
    };
    SortPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
            name: 'sort'
        }), 
        __metadata('design:paramtypes', [])
    ], SortPipe);
    return SortPipe;
}());
//# sourceMappingURL=sort.pipe.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__letters_letters_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__letter_letter_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_letter_new_letter_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_contacts_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_form_contact_form_component__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mailboxRoutes; });





var mailboxRoutes = [
    {
        path: 'letters/:mailboxName',
        component: __WEBPACK_IMPORTED_MODULE_0__letters_letters_component__["a" /* LettersComponent */]
    },
    {
        path: 'letter/new',
        component: __WEBPACK_IMPORTED_MODULE_2__new_letter_new_letter_component__["a" /* NewLetterComponent */]
    },
    {
        path: 'letters/:mailboxName/:letterId',
        component: __WEBPACK_IMPORTED_MODULE_1__letter_letter_component__["a" /* LetterComponent */]
    },
    {
        path: 'contacts',
        component: __WEBPACK_IMPORTED_MODULE_3__contacts_contacts_component__["a" /* ContactsComponent */]
    },
    {
        path: 'contacts/new',
        component: __WEBPACK_IMPORTED_MODULE_4__contact_form_contact_form_component__["a" /* ContactFormComponent */]
    },
    {
        path: 'contacts/edit/:contactId',
        component: __WEBPACK_IMPORTED_MODULE_4__contact_form_contact_form_component__["a" /* ContactFormComponent */]
    },
    {
        path: '',
        redirectTo: 'letters/inbox',
        pathMatch: 'full'
    }
];
//# sourceMappingURL=mailbox.routes.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mailbox_interface__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mailbox_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mailbox_interface__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mailbox_interface__["Mailbox"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__mailbox_interface__["Mailbox"]) === 'function' && _a) || Object)
    ], MenuComponent.prototype, "mailbox", void 0);
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__(620),
            styles: [__webpack_require__(598)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
    var _a;
}());
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs___);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(_searchService, _formBuilder) {
        var _this = this;
        this._searchService = _searchService;
        this._formBuilder = _formBuilder;
        // Создаем модель формы.
        this.searchForm = this._createForm();
        // Отслеживаем ввод данных в поле поиска.
        this.searchForm.controls['input'].valueChanges
            .subscribe(function (value) {
            _this.seek(value);
        });
    }
    /**
     * Поиск по значению.
     */
    SearchComponent.prototype.seek = function (value) {
        this._searchService.filter().next(value);
    };
    /**
     * Создает модель формы.
     */
    SearchComponent.prototype._createForm = function () {
        return this._formBuilder.group({
            input: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('')
        });
    };
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__(621),
            styles: [__webpack_require__(599)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === 'function' && _b) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b;
}());
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_auth_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mailbox_interface__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mailbox_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mailbox_interface__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserThumbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserThumbComponent = (function () {
    function UserThumbComponent(_authService) {
        this._authService = _authService;
    }
    /**
     * Выход из почтового ящика.
     */
    UserThumbComponent.prototype.onExit = function () {
        this._authService.logout();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__mailbox_interface__["Mailbox"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__mailbox_interface__["Mailbox"]) === 'function' && _a) || Object)
    ], UserThumbComponent.prototype, "mailbox", void 0);
    UserThumbComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-user-thumb',
            template: __webpack_require__(622),
            styles: [__webpack_require__(600)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__login_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__login_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], UserThumbComponent);
    return UserThumbComponent;
    var _a, _b;
}());
//# sourceMappingURL=user-thumb.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutsideClickDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutsideClickDirective = (function () {
    function OutsideClickDirective(_el) {
        this._el = _el;
        this.outsideClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */]();
    }
    OutsideClickDirective.prototype.onClick = function (event, targetElement) {
        if (!this._el.nativeElement.contains(targetElement)) {
            this.outsideClick.emit(event);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */]) === 'function' && _a) || Object)
    ], OutsideClickDirective.prototype, "outsideClick", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])('document:click', ['$event', '$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], OutsideClickDirective.prototype, "onClick", null);
    OutsideClickDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Directive */])({
            selector: '[outsideClick]'
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === 'function' && _b) || Object])
    ], OutsideClickDirective);
    return OutsideClickDirective;
    var _a, _b;
}());
//# sourceMappingURL=outside-click.directive.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxLetterToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxLetterToolsComponent = (function () {
    function InboxLetterToolsComponent(_toolsService) {
        this._toolsService = _toolsService;
    }
    /**
     * Событие клика по кнопке удаления.
     */
    InboxLetterToolsComponent.prototype.onDelete = function () {
        this._toolsService.deleteLetter(this.letterId);
    };
    /**
     * Событие клика по кнопке добавления в спам.
     */
    InboxLetterToolsComponent.prototype.onSpam = function () {
        this._toolsService.markLetterAsSpam(this.letterId);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', String)
    ], InboxLetterToolsComponent.prototype, "letterId", void 0);
    InboxLetterToolsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-inbox-letter-tools',
            template: __webpack_require__(624),
            styles: [__webpack_require__(602)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */]) === 'function' && _a) || Object])
    ], InboxLetterToolsComponent);
    return InboxLetterToolsComponent;
    var _a;
}());
//# sourceMappingURL=inbox-letter-tools.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxToolsComponent = (function () {
    function InboxToolsComponent(_toolsService) {
        this._toolsService = _toolsService;
        this.checkedAll = false;
        // Выбор всех писем.
        this._onCheckedAll();
    }
    /**
     * Добавляет все письма в список выбранных к действию.
     * или, наоборот, удаляет из него.
     */
    InboxToolsComponent.prototype.onSelectAll = function (checked) {
        if (checked === true) {
            this._toolsService.addToSelected();
        }
        else {
            this._toolsService.removeFromSelected();
        }
    };
    /**
     * Событие клика по кнопке удаления.
     */
    InboxToolsComponent.prototype.onDelete = function () {
        this._toolsService.deleteSelectedLetters('inbox')
            .checkedAll().next(false);
    };
    /**
     * Событие клика по кнопке добавления в спам.
     */
    InboxToolsComponent.prototype.onSpam = function () {
        this._toolsService.markSelectedLettersAsSpam()
            .checkedAll().next(false);
    };
    /**
     * Подписывается на выделение всех писем.
     */
    InboxToolsComponent.prototype._onCheckedAll = function () {
        var _this = this;
        this._toolsService.checkedAll()
            .subscribe(function (checkedAll) {
            _this.checkedAll = checkedAll;
        });
    };
    InboxToolsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-inbox-tools',
            template: __webpack_require__(625),
            styles: [__webpack_require__(603)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */]) === 'function' && _a) || Object])
    ], InboxToolsComponent);
    return InboxToolsComponent;
    var _a;
}());
//# sourceMappingURL=inbox-tools.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentLetterToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SentLetterToolsComponent = (function () {
    function SentLetterToolsComponent(_toolsService) {
        this._toolsService = _toolsService;
    }
    /**
     * Событие клика по кнопке удаления.
     */
    SentLetterToolsComponent.prototype.onDelete = function () {
        this._toolsService.deleteLetter(this.letterId);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', String)
    ], SentLetterToolsComponent.prototype, "letterId", void 0);
    SentLetterToolsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-sent-letter-tools',
            template: __webpack_require__(626),
            styles: [__webpack_require__(604)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */]) === 'function' && _a) || Object])
    ], SentLetterToolsComponent);
    return SentLetterToolsComponent;
    var _a;
}());
//# sourceMappingURL=sent-letter-tools.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SentToolsComponent = (function () {
    function SentToolsComponent(_toolsService) {
        this._toolsService = _toolsService;
        this.checkedAll = false;
        // Выбор всех писем.
        this._onCheckedAll();
    }
    /**
     * Добавляет все письма в список выбранных к действию.
     * или, наоборот, удаляет из него.
     */
    SentToolsComponent.prototype.onSelectAll = function (checked) {
        if (checked === true) {
            this._toolsService.addToSelected();
        }
        else {
            this._toolsService.removeFromSelected();
        }
    };
    /**
     * Событие клика по кнопке удаления.
     */
    SentToolsComponent.prototype.onDelete = function () {
        this._toolsService.deleteSelectedLetters('sent')
            .checkedAll().next(false);
    };
    /**
     * Подписывается на выделение всех писем.
     */
    SentToolsComponent.prototype._onCheckedAll = function () {
        var _this = this;
        this._toolsService.checkedAll()
            .subscribe(function (checkedAll) {
            _this.checkedAll = checkedAll;
        });
    };
    SentToolsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-sent-tools',
            template: __webpack_require__(627),
            styles: [__webpack_require__(605)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */]) === 'function' && _a) || Object])
    ], SentToolsComponent);
    return SentToolsComponent;
    var _a;
}());
//# sourceMappingURL=sent-tools.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpamLetterToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpamLetterToolsComponent = (function () {
    function SpamLetterToolsComponent(_toolsService) {
        this._toolsService = _toolsService;
    }
    /**
     * Событие клика по кнопке удаления.
     */
    SpamLetterToolsComponent.prototype.onDelete = function () {
        this._toolsService.deleteLetter(this.letterId);
    };
    /**
     * Событие клика по кнопке добавления в спам.
     */
    SpamLetterToolsComponent.prototype.onNotSpam = function () {
        this._toolsService.markLetterAsNotSpam(this.letterId);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', String)
    ], SpamLetterToolsComponent.prototype, "letterId", void 0);
    SpamLetterToolsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-spam-letter-tools',
            template: __webpack_require__(628),
            styles: [__webpack_require__(606)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */]) === 'function' && _a) || Object])
    ], SpamLetterToolsComponent);
    return SpamLetterToolsComponent;
    var _a;
}());
//# sourceMappingURL=spam-letter-tools.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpamToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpamToolsComponent = (function () {
    function SpamToolsComponent(_toolsService) {
        this._toolsService = _toolsService;
        this.checkedAll = false;
        // Выбор всех писем.
        this._onCheckedAll();
    }
    /**
     * Добавляет все письма в список выбранных к действию.
     * или, наоборот, удаляет из него.
     */
    SpamToolsComponent.prototype.onSelectAll = function (checked) {
        if (checked === true) {
            this._toolsService.addToSelected();
        }
        else {
            this._toolsService.removeFromSelected();
        }
    };
    /**
     * Событие клика по кнопке удаления.
     */
    SpamToolsComponent.prototype.onDelete = function () {
        this._toolsService.deleteSelectedLetters('spam')
            .checkedAll().next(false);
    };
    /**
     * Событие клика по кнопке убирания из спам.
     */
    SpamToolsComponent.prototype.onNotSpam = function () {
        this._toolsService.markSelectedLettersAsNotSpam()
            .checkedAll().next(false);
    };
    /**
     * Подписывается на выделение всех писем.
     */
    SpamToolsComponent.prototype._onCheckedAll = function () {
        var _this = this;
        this._toolsService.checkedAll()
            .subscribe(function (checkedAll) {
            _this.checkedAll = checkedAll;
        });
    };
    SpamToolsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-spam-tools',
            template: __webpack_require__(629),
            styles: [__webpack_require__(607)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__tools_service__["a" /* ToolsService */]) === 'function' && _a) || Object])
    ], SpamToolsComponent);
    return SpamToolsComponent;
    var _a;
}());
//# sourceMappingURL=spam-tools.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolsComponent = (function () {
    function ToolsComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', String)
    ], ToolsComponent.prototype, "mailboxName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', String)
    ], ToolsComponent.prototype, "letterId", void 0);
    ToolsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-tools',
            template: __webpack_require__(630),
            styles: [__webpack_require__(608)]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolsComponent);
    return ToolsComponent;
}());
//# sourceMappingURL=tools.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".auth {\r\n    height: 352px;\r\n    margin: calc(50vh - 235px) auto 0 auto;\r\n    padding-top: 70px;\r\n    position: relative;\r\n    width: 300px;\r\n\r\n    font-size: 14px;\r\n}\r\n\r\n/* Данные входа */\r\n\r\n.auth__data {\r\n    left: 0;\r\n    padding: 15px;\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n\r\n    border-bottom: 1px solid #ccc;\r\n\r\n    background-color: #F3F3F3;\r\n}\r\n.auth__email,\r\n.auth__password {\r\n    padding-left: 70px;\r\n    position: relative;\r\n}\r\n.auth__email {\r\n    margin-bottom: 10px;\r\n}\r\n.auth__email:before,\r\n.auth__password:before {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 60px;\r\n\r\n    font-weight: bold;\r\n}\r\n.auth__email:before {\r\n    content: 'Email:';\r\n}\r\n.auth__password:before {\r\n    content: '\\41F\\430\\440\\43E\\43B\\44C:';\r\n}\r\n\r\n/* Сообщение об ошибке */\r\n\r\n.auth__error {\r\n    left: 0;\r\n    margin: 0 auto;\r\n    padding: 10px 25px;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 300px;\r\n\r\n    border-radius: 3px;\r\n\r\n    background-color: #FF8985;\r\n\r\n    color: #941410;\r\n\r\n    opacity: 0;\r\n    -webkit-transition: opacity 2s ease-in;\r\n    transition: opacity 2s ease-in;\r\n}\r\n.auth__error.show {\r\n    opacity: 1;\r\n    -webkit-transition: none;\r\n    transition: none;\r\n}\r\n\r\n/* Форма */\r\n\r\n.auth__wrapper {\r\n    padding: 25px;\r\n    width: 300px;\r\n\r\n    border-radius: 3px;\r\n\r\n    background-color: #F3F3F3;\r\n}\r\n.auth__info {\r\n    margin-bottom: 25px;\r\n\r\n    font-weight: bold;\r\n}\r\n.auth__label {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n\r\n    cursor: pointer;\r\n}\r\n.auth__input {\r\n    display: block;\r\n    height: 30px;\r\n    margin-bottom: 25px;\r\n    padding: 0 10px;\r\n    width: 250px;\r\n\r\n    border: 1px solid #4285F4;\r\n    border-radius: 3px;\r\n}\r\n.auth__input:hover {\r\n    border: 1px solid #3A77D8;\r\n\r\n    box-shadow: inset 0 0 1px 0 #3A77D8;\r\n}\r\n.auth__input.error {\r\n    border-color: #941410;\r\n}\r\n\r\n/* Кнопка входа */\r\n\r\n.auth__button {\r\n    display: block;\r\n    padding: 10px 0;\r\n    width: 100px;\r\n\r\n    border: 1px solid #507299;\r\n    border-radius: 3px;\r\n\r\n    background-color: #4285F4;\r\n\r\n    color: #fff;\r\n    text-align: center;\r\n    text-decoration: none;\r\n\r\n    cursor: pointer;\r\n}\r\n.auth__button:hover {\r\n    background-color: #3A77D8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".contact-form {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/* Сообщение об ошибке */\r\n\r\n.contact-form__error {\r\n    margin-bottom: 15px;\r\n    padding: 10px 15px;\r\n\r\n    border: 1px solid #FDBCBC;\r\n    border-radius: 3px;\r\n\r\n    background-color: #FAD3D3;\r\n\r\n    color: #FF0000;\r\n}\r\n\r\n/* Форма */\r\n\r\n.contact-form__form {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n.contact-form__field {\r\n    margin-bottom: 15px;\r\n    position: relative;\r\n}\r\n.contact-form__label {\r\n    display: block;\r\n    height: 30px;\r\n    left: 0;\r\n    line-height: 28px;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 70px;\r\n    z-index: 1;\r\n\r\n    border: 1px solid #ccc;\r\n    border-top-left-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n\r\n    background-color: #F1F1F1;\r\n\r\n    font-size: 1.2rem;\r\n    text-align: center;\r\n\r\n    cursor: pointer;\r\n}\r\n.contact-form__input {\r\n    height: 30px;\r\n    padding: 0 10px 0 80px;\r\n    width: 100%;\r\n\r\n    border: 1px solid #ccc;\r\n    border-radius: 3px;\r\n\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n}\r\n.contact-form__input.error {\r\n    background-color: #FAD3D3;\r\n}\r\n.contact-form__input.valid {\r\n    background-color: #D3FAD9;\r\n}\r\n.contact-form__text {\r\n    min-height: 400px;\r\n    padding: 10px;\r\n    width: 100%;\r\n\r\n    border: 1px solid #ccc;\r\n    border-radius: 3px;\r\n\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n\r\n    resize: vertical;\r\n}\r\n.contact-form__add-btn {\r\n    padding: 7px 12px;\r\n\r\n    border: none;\r\n    border-radius: 3px;\r\n\r\n    background-color: #4285F4;\r\n\r\n    color: #fff;\r\n\r\n    cursor: pointer;\r\n}\r\n.contact-form__add-btn:hover {\r\n    background-color: #3A77D8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".contact {\r\n    border: 1px solid #D1D1D1;\r\n    border-radius: 3px;\r\n\r\n    background-color: #F1F1F1;\r\n\r\n    font-size: 1.5rem;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n/* Инструменты */\r\n\r\n.contact__tools {\r\n    padding: 10px;\r\n\r\n    border-bottom: 1px solid #D1D1D1;\r\n\r\n    text-align: right;\r\n}\r\n.contact__tool {\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\n.contact__delete {\r\n    height: 15px;\r\n    padding: 0;\r\n    width: 15px;\r\n\r\n    border: none;\r\n\r\n    background: url('/assets/img/delete.svg') center center/15px 15px no-repeat;\r\n\r\n    cursor: pointer;\r\n}\r\n.contact__edit {\r\n    height: 15px;\r\n    padding: 0;\r\n    width: 15px;\r\n\r\n    border: none;\r\n\r\n    background: url('/assets/img/edit.svg') center center/15px 15px no-repeat;\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n/* Информация о контакте */\r\n\r\n.contact__info {\r\n    padding: 10px;\r\n\r\n    text-align: center;\r\n}\r\n.contact__info-item {\r\n    margin-bottom: 10px;\r\n}\r\n.contact__info-item:last-of-type {\r\n    margin-bottom: 0;\r\n}\r\n.contact__photo {\r\n    width: 50px;\r\n\r\n    border-radius: 50%;\r\n}\r\n.contact__name {\r\n    padding-left: 25px;\r\n\r\n    background: url('/assets/img/name.svg') left center/15px 15px no-repeat;\r\n}\r\n.contact__email {\r\n    padding-left: 25px;\r\n\r\n    background: url('/assets/img/email.svg') left center/15px 15px no-repeat;\r\n}\r\n.contact__phone {\r\n    padding-left: 25px;\r\n\r\n    background: url('/assets/img/phone.svg') left center/15px 15px no-repeat;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".tools__list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n\r\n    font-size: 1.2rem;\r\n}\r\n.tools__item {\r\n    height: 45px;\r\n    padding: 25px 10px 5px;\r\n\r\n    background-color: #F1F1F1;\r\n\r\n    cursor: pointer;\r\n}\r\n.tools__item_add-user {\r\n    background: url('/assets/img/add-new-user.svg') center 5px/18px 18px no-repeat;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".contacts {\r\n}\r\n\r\n/* Инструменты */\r\n\r\n.contacts__tools {\r\n    margin-bottom: 20px;\r\n    padding-bottom: 5px;\r\n\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\n/* Контакты */\r\n\r\n.contacts__list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n}\r\n.contacts__item {\r\n    width: 30%;\r\n    margin-right: 5%;\r\n    margin-bottom: 20px;\r\n}\r\n.contacts__item:nth-child(3n + 3) {\r\n    margin-right: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".folders {\r\n    font-size: 1.4rem;\r\n}\r\n.folders__item {\r\n    margin-bottom: 10px;\r\n\r\n    border-radius: 3px;\r\n}\r\n.folders__item.active,\r\n.folders__item:hover {\r\n    border-right: 3px solid #FCE07C;\r\n\r\n    background-color: #FEF9E8;\r\n}\r\n.folders__link {\r\n    display: block;\r\n    padding: 7px 5px;\r\n\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".letter {\r\n\r\n}\r\n\r\n/* Инструменты */\r\n\r\n.letter__tools {\r\n    margin-bottom: 20px;\r\n    padding-bottom: 5px;\r\n\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\n/* Информация о письме */\r\n\r\n.letter__subject {\r\n    margin: 20px 0;\r\n\r\n    font-size: 2rem;\r\n}\r\n.letter__header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    line-height: 30px;\r\n    margin-bottom: 15px;\r\n\r\n    border: 1px solid #ccc;\r\n    border-radius: 3px;\r\n\r\n    font-size: 1.2rem;\r\n}\r\n.letter__from {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 80%;\r\n            flex: 0 0 80%;\r\n    padding-left: 80px;\r\n    position: relative;\r\n}\r\n.letter__from:before {\r\n    display: block;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    height: 30px;\r\n    left: 0;\r\n    line-height: 28px;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 70px;\r\n    z-index: 1;\r\n\r\n    border-right: 1px solid #ccc;\r\n    border-top-left-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n\r\n    background-color: #F1F1F1;\r\n\r\n    text-align: center;\r\n\r\n    content: '\\41E\\442   \\43A\\43E\\433\\43E:';\r\n}\r\n.letter__name {\r\n    font-weight: bold;\r\n    margin-right: 10px;\r\n}\r\n.letter__email {\r\n\r\n}\r\n.letter__date {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 20%;\r\n            flex: 0 0 20%;\r\n    padding-right: 15px;\r\n\r\n    text-align: right;\r\n}\r\n\r\n/* Письмо */\r\n\r\n.letter__body {\r\n    padding: 15px;\r\n\r\n    border: 1px solid #ccc;\r\n    border-radius: 3px;\r\n\r\n    line-height: 25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".letters {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n/* Инструменты */\r\n\r\n.letters__tools {\r\n    margin-bottom: 20px;\r\n    padding: 0 15px 5px;\r\n\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\n/* Список писем */\r\n\r\n.letters__list {\r\n}\r\n.letters__item {\r\n    border-bottom: 1px solid #d0d0d0;\r\n\r\n    color: #000;\r\n    text-decoration: none;\r\n}\r\n.letters__item:nth-child(2n) {\r\n    background-color: #f3f3f3;\r\n}\r\n.letters__item:hover {\r\n    background-color: #e3e3e3;\r\n}\r\n\r\n/* Чекбокс */\r\n\r\n.letters__checkbox {\r\n    float: left;\r\n    margin: 15px;\r\n    padding: 0;\r\n    position: relative;\r\n    top: 5px;\r\n    width: 14px;\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n/* Письмо */\r\n\r\n.letters__letter {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    height: 100%;\r\n    padding: 15px 15px 15px 5px;\r\n\r\n    cursor: pointer;\r\n\r\n    font-size: 1.5rem;\r\n    line-height: 1.5em;\r\n}\r\n.letters__letter-name {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 20%;\r\n            flex: 0 0 20%;\r\n    padding-right: 10px;\r\n\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.letters__letter-content {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 70%;\r\n            flex: 0 0 70%;\r\n\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.letters__letter-subject {\r\n    font-weight: bold;\r\n}\r\n.letters__letter-short-body {\r\n}\r\n.letters__letter-date {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 10%;\r\n            flex: 0 0 10%;\r\n\r\n    text-align: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".mailbox {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n\r\n    font-size: 1.5rem;\r\n}\r\n.mailbox__menu {\r\n    height: 50px;\r\n    line-height: 50px;\r\n    background-color: #F1F1F1;\r\n}\r\n.mailbox__main {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    padding: 20px;\r\n    position: relative;\r\n}\r\n.mailbox__footer {\r\n    line-height: 80px;\r\n    margin-top: 40px;\r\n    padding: 0 20px;\r\n\r\n    background-color: #F1F1F1;\r\n\r\n    font-size: 1.2rem;\r\n}\r\n.mailbox__preloader {\r\n    height: 3px;\r\n    left: 0;\r\n    right: 0;\r\n    position: absolute;\r\n    top: 0;\r\n\r\n    overflow: hidden;\r\n}\r\n.mailbox__preloader:before {\r\n    height: 100%;\r\n    position: absolute;\r\n    width: 200%;\r\n\r\n    background: -webkit-repeating-linear-gradient(135deg, #4285F4 0px, #4285F4 10px, #fff 10px, #fff 20px);\r\n\r\n    background: repeating-linear-gradient(-45deg, #4285F4 0px, #4285F4 10px, #fff 10px, #fff 20px);\r\n\r\n    -webkit-animation: preloader 10s linear infinite;\r\n\r\n            animation: preloader 10s linear infinite;\r\n    content: '';\r\n}\r\n@-webkit-keyframes preloader {\r\n    0% {\r\n        right: 0;\r\n    }\r\n    100% {\r\n        right: -100%;\r\n    }\r\n}\r\n@keyframes preloader {\r\n    0% {\r\n        right: 0;\r\n    }\r\n    100% {\r\n        right: -100%;\r\n    }\r\n}\r\n.mailbox__sidebar {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 15%;\r\n            flex: 0 0 15%;\r\n    margin-right: 5%;\r\n}\r\n.mailbox__content {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 80%;\r\n            flex: 0 0 80%;\r\n}\r\n.mailbox__row {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    margin-bottom: 20px;\r\n}\r\n.mailbox__write-new {\r\n    display: block;\r\n    height: 30px;\r\n    padding: 7px 10px;\r\n    width: 160px;\r\n\r\n    border-radius: 3px;\r\n\r\n    background: #FFF1BE url('/assets/img/to-write.svg') 24px center/15px 12px no-repeat;\r\n\r\n    color: inherit;\r\n    text-align: center;\r\n    text-decoration: none;\r\n}\r\n.mailbox__write-new:hover {\r\n    background-color: #FBE07D;\r\n}\r\n.mailbox__update {\r\n    display: block;\r\n    height: 30px;\r\n    margin-left: 10px;\r\n    padding: 7px 10px;\r\n    width: 30px;\r\n\r\n    border: none;\r\n    border-radius: 3px;\r\n\r\n    background: #FFF1BE url('/assets/img/update.svg') center center/15px 12px no-repeat;\r\n\r\n    cursor: pointer;\r\n}\r\n.mailbox__update:hover {\r\n    background-color: #FBE07D;\r\n}\r\n.mailbox__folders {\r\n    margin-bottom: 40px;\r\n}\r\n.mailbox__advertisement {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    height: 300px;\r\n    padding: 5px;\r\n\r\n    border: 1px solid #FFF1BE;\r\n\r\n    background-color: #FEF9E8;\r\n\r\n    text-align: center;\r\n}\r\n.mailbox__advertisement p {\r\n    padding: 5px 0;\r\n}\r\n.mailbox__advertisement a {\r\n    color: inherit;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".menu {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    padding: 0 20px;\r\n\r\n    font-size: 1.5rem;\r\n}\r\n.menu_search {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 50%;\r\n            flex: 1 1 50%;\r\n}\r\n.menu__contacts {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 20%;\r\n            flex: 1 1 20%;\r\n}\r\n.menu__link {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n.menu__user {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 30%;\r\n            flex: 1 1 30%;\r\n\r\n    text-align: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".search {\r\n    height: 30px;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n.search__field {\r\n    height: 30px;\r\n    padding: 0 70px 0 10px;\r\n    width: 100%;\r\n\r\n    border: 1px solid #ccc;\r\n    border-radius: 3px;\r\n}\r\n.search__btn {\r\n    height: 30px;\r\n    padding: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 12px;\r\n    width: 60px;\r\n\r\n    border: none;\r\n    border-top-right-radius: 3px;\r\n    border-bottom-right-radius: 3px;\r\n\r\n    background: #4285F4 url('/assets/img/search.svg') center center/15px 15px no-repeat;\r\n\r\n    cursor: pointer;\r\n}\r\n.search__btn:hover {\r\n    background-color: #3A77D8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".user {\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    height: 100%;\r\n\r\n    font-size: 1.5rem;\r\n}\r\n.user__info {\r\n}\r\n.user__name,\r\n.user__email {\r\n    line-height: 1.5rem;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.user__name {\r\n\r\n}\r\n.user__email {\r\n    font-size: 1.2rem;\r\n}\r\n.user__photo {\r\n    height: 40px;\r\n    margin: 0 15px;\r\n    width: 40px;\r\n\r\n    border-radius: 50%;\r\n}\r\n.user__exit-btn {\r\n    height: 40px;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 20px;\r\n\r\n    border: none;\r\n\r\n    background: url('/assets/img/exit.svg') right center/20px 20px no-repeat;\r\n\r\n    cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".new-letter {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/* Сообщение об ошибке */\r\n\r\n.new-letter__error {\r\n    margin-bottom: 15px;\r\n    padding: 10px 15px;\r\n\r\n    border: 1px solid #FDBCBC;\r\n    border-radius: 3px;\r\n\r\n    background-color: #FAD3D3;\r\n\r\n    color: #FF0000;\r\n}\r\n\r\n/* Форма */\r\n\r\n.new-letter__form {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n.new-letter__field {\r\n    margin-bottom: 15px;\r\n    position: relative;\r\n}\r\n.new-letter__label {\r\n    display: block;\r\n    height: 30px;\r\n    left: 0;\r\n    line-height: 28px;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 70px;\r\n    z-index: 1;\r\n\r\n    border: 1px solid #ccc;\r\n    border-top-left-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n\r\n    background-color: #F1F1F1;\r\n\r\n    font-size: 1.2rem;\r\n    text-align: center;\r\n\r\n    cursor: pointer;\r\n}\r\n.new-letter__input {\r\n    height: 30px;\r\n    padding: 0 10px 0 80px;\r\n    width: 100%;\r\n\r\n    border: 1px solid #ccc;\r\n    border-radius: 3px;\r\n\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n}\r\n.new-letter__input.error {\r\n    background-color: #FAD3D3;\r\n}\r\n.new-letter__input.valid {\r\n    background-color: #D3FAD9;\r\n}\r\n.new-letter__possible-contact-list {\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 29px;\r\n    z-index: 2;\r\n\r\n    border: 1px solid #ccc;\r\n\r\n    background-color: #fff;\r\n\r\n    font-size: 1.2rem;\r\n\r\n    box-shadow: 0 3px 8px -2px #ccc;\r\n}\r\n.new-letter__possible-contact {\r\n    padding: 15px 10px;\r\n\r\n    border-bottom: 1px solid #ccc;\r\n\r\n    font-weight: bold;\r\n\r\n    cursor: pointer;\r\n}\r\n.new-letter__possible-contact:last-of-type {\r\n    border: none;\r\n}\r\n.new-letter__possible-contact:hover {\r\n    background-color: #FFF1BE;\r\n}\r\n.new-letter__possible-contact-name {\r\n    margin-right: 10px;\r\n    padding: 0 8px;\r\n\r\n    border-radius: 3px;\r\n\r\n    background-color: #F1F1F1;\r\n\r\n    font-weight: normal;\r\n}\r\n.new-letter__body {\r\n    min-height: 400px;\r\n    padding: 10px;\r\n    width: 100%;\r\n\r\n    border: 1px solid #ccc;\r\n    border-radius: 3px;\r\n\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n\r\n    resize: vertical;\r\n}\r\n.new-letter__send-btn {\r\n    padding: 7px 12px;\r\n\r\n    border: none;\r\n    border-radius: 3px;\r\n\r\n    background-color: #4285F4;\r\n\r\n    color: #fff;\r\n\r\n    cursor: pointer;\r\n}\r\n.new-letter__send-btn:hover {\r\n    background-color: #3A77D8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".tools__list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n\r\n    font-size: 1.2rem;\r\n}\r\n.tools__item {\r\n    height: 45px;\r\n    padding: 25px 10px 5px;\r\n\r\n    background-color: #F1F1F1;\r\n\r\n    cursor: pointer;\r\n}\r\n.tools__item_delete {\r\n    background: url('/assets/img/delete.svg') center 5px/15px 15px no-repeat;\r\n}\r\n.tools__item_spam {\r\n    background: url('/assets/img/spam.svg') center 5px/15px 15px no-repeat;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".tools__list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n\r\n    font-size: 1.2rem;\r\n}\r\n.tools__item {\r\n    height: 45px;\r\n    padding: 25px 10px 5px;\r\n\r\n    background-color: #F1F1F1;\r\n\r\n    cursor: pointer;\r\n}\r\n.tools__item_all {\r\n    line-height: 50px;\r\n    margin-right: 10px;\r\n    padding: 0;\r\n\r\n    border: none;\r\n\r\n    background: none;\r\n\r\n    cursor: default;\r\n}\r\n.tools__item_all > input {\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n    cursor: pointer;\r\n}\r\n.tools__item_delete {\r\n    background: url('/assets/img/delete.svg') center 5px/15px 15px no-repeat;\r\n}\r\n.tools__item_spam {\r\n    background: url('/assets/img/spam.svg') center 5px/15px 15px no-repeat;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".tools__list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n\r\n    font-size: 1.2rem;\r\n}\r\n.tools__item {\r\n    height: 45px;\r\n    padding: 25px 10px 5px;\r\n\r\n    background-color: #F1F1F1;\r\n\r\n    cursor: pointer;\r\n}\r\n.tools__item_delete {\r\n    background: url('/assets/img/delete.svg') center 5px/15px 15px no-repeat;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".tools__list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n\r\n    font-size: 1.2rem;\r\n}\r\n.tools__item {\r\n    height: 45px;\r\n    padding: 25px 10px 5px;\r\n\r\n    background-color: #F1F1F1;\r\n\r\n    cursor: pointer;\r\n}\r\n.tools__item_all {\r\n    line-height: 50px;\r\n    margin-right: 10px;\r\n    padding: 0;\r\n\r\n    border: none;\r\n\r\n    background: none;\r\n\r\n    cursor: default;\r\n}\r\n.tools__item_all > input {\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n    cursor: pointer;\r\n}\r\n.tools__item_delete {\r\n    background: url('/assets/img/delete.svg') center 5px/15px 15px no-repeat;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".tools__list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n\r\n    font-size: 1.2rem;\r\n}\r\n.tools__item {\r\n    height: 45px;\r\n    padding: 25px 10px 5px;\r\n\r\n    background-color: #F1F1F1;\r\n\r\n    cursor: pointer;\r\n}\r\n.tools__item_delete {\r\n    background: url('/assets/img/delete.svg') center 5px/15px 15px no-repeat;\r\n}\r\n.tools__item_not-spam {\r\n    background: url('/assets/img/not-spam.svg') center 5px/15px 15px no-repeat;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".tools__list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n\r\n    font-size: 1.2rem;\r\n}\r\n.tools__item {\r\n    height: 45px;\r\n    padding: 25px 10px 5px;\r\n\r\n    background-color: #F1F1F1;\r\n\r\n    cursor: pointer;\r\n}\r\n.tools__item_all {\r\n    line-height: 50px;\r\n    margin-right: 10px;\r\n    padding: 0;\r\n\r\n    border: none;\r\n\r\n    background: none;\r\n\r\n    cursor: default;\r\n}\r\n.tools__item_all > input {\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n    cursor: pointer;\r\n}\r\n.tools__item_delete {\r\n    background: url('/assets/img/delete.svg') center 5px/15px 15px no-repeat;\r\n}\r\n.tools__item_not-spam {\r\n    background: url('/assets/img/not-spam.svg') center 5px/15px 15px no-repeat;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = "<div class=\"auth\">\n\n    <!-- Данные входа -->\n\n    <div class=\"auth__data\">\n        <p class=\"auth__email\">user@mail.com</p>\n        <p class=\"auth__password\">123</p>\n    </div>\n\n    <!-- Сообщение об ошибке -->\n    <div class=\"auth__error\"\n        [class.show]=\"error\">\n        <p>Пароль и/или логин введены не верно!</p>\n    </div><!-- .auth__error -->\n\n    <!-- Форма -->\n    <div class=\"auth__wrapper\">\n\n        <p class=\"auth__info\">Вход в почтовый ящик:</p>\n\n        <form [formGroup]=\"loginForm\"\n            (ngSubmit)=\"login(loginForm.controls['email'].value, loginForm.controls['password'].value)\">\n\n            <label for=\"email\"\n                class=\"auth__label\">Email: </label>\n            <input id=\"email\"\n                class=\"auth__input\"\n                type=\"text\"\n                [formControl]=\"loginForm.controls['email']\">\n\n            <label for=\"password\"\n                class=\"auth__label\">Пароль: </label>\n            <input id=\"password\"\n                class=\"auth__input\"\n                type=\"password\"\n                [formControl]=\"loginForm.controls['password']\">\n\n            <button class=\"auth__button\"\n                type=\"submit\">\n                Войти\n            </button>\n\n        </form>\n\n    </div><!-- .auth__wrapper -->\n</div><!-- .auth -->\n"

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-form\">\n\n    <!-- Сообщение об ошибке -->\n\n    <p class=\"contact-form__error\"\n        *ngIf=\"notValidForm\">\n        Форма должна быть валидной!\n    </p>\n\n    <!-- Форма -->\n\n    <form class=\"contact-form__form\"\n        autocomplete=\"off\"\n        *ngIf=\"contactForm\"\n        [formGroup]=\"contactForm\"\n        (ngSubmit)=\"saveContact(contactForm.value)\">\n\n        <!-- Имя -->\n\n        <div class=\"contact-form__field\">\n            <label class=\"contact-form__label\"\n                for=\"name\">\n                Имя:\n            </label>\n\n            <input class=\"contact-form__input\"\n                id=\"name\"\n                type=\"text\"\n                [class.error]=\"!contactForm.controls['name'].valid\n                    && contactForm.controls['name'].touched\"\n                [class.valid]=\"contactForm.controls['name'].valid\n                    && contactForm.controls['name'].touched\"\n                [formControl]=\"contactForm.controls['name']\">\n        </div><!-- .contact-form__field -->\n\n        <!-- Email -->\n\n        <div class=\"contact-form__field\">\n            <label class=\"contact-form__label\"\n                for=\"email\">\n                Email:\n            </label>\n\n            <input class=\"contact-form__input\"\n                id=\"email\"\n                type=\"text\"\n                [class.error]=\"!contactForm.controls['email'].valid\n                    && contactForm.controls['email'].touched\"\n                [class.valid]=\"contactForm.controls['email'].valid\n                    && contactForm.controls['email'].touched\"\n                [formControl]=\"contactForm.controls['email']\">\n        </div><!-- .contact-form__field -->\n\n        <!-- Телефон -->\n\n        <div class=\"contact-form__field\">\n            <label class=\"contact-form__label\"\n                for=\"phone\">\n                Телефон:\n            </label>\n\n            <input class=\"contact-form__input\"\n                id=\"phone\"\n                type=\"text\"\n                [class.error]=\"!contactForm.controls['phone'].valid\n                    && contactForm.controls['phone'].touched\"\n                [class.valid]=\"contactForm.controls['phone'].valid\n                    && contactForm.controls['phone'].touched\"\n                [formControl]=\"contactForm.controls['phone']\">\n        </div><!-- .contact-form__field -->\n\n        <!-- Фото -->\n\n        <div class=\"contact-form__field\">\n            <label class=\"contact-form__label\"\n                for=\"photo\">\n                Фото:\n            </label>\n\n            <input class=\"contact-form__input\"\n                id=\"photo\"\n                type=\"text\"\n                [class.error]=\"!contactForm.controls['photo'].valid\n                    && contactForm.controls['photo'].touched\"\n                [class.valid]=\"contactForm.controls['photo'].valid\n                    && contactForm.controls['photo'].touched\"\n                [formControl]=\"contactForm.controls['photo']\">\n        </div><!-- .contact-form__field -->\n\n        <!-- Кнопка добавления контакта -->\n\n        <button class=\"contact-form__add-btn\"\n            type=\"submit\">\n            Сохранить\n        </button><!-- .contact-form__add-btn -->\n\n    </form><!-- .contact-form__form -->\n</div><!-- .contact-form -->\n"

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n    <ul class=\"contact__tools\">\n        <li class=\"contact__tool\">\n            <button class=\"contact__edit\"\n                [routerLink]=\"['./edit', contact.id]\"></button>\n        </li>\n        <li class=\"contact__tool\">\n            <button class=\"contact__delete\"\n                (click)=\"onDelete()\"></button>\n        </li>\n    </ul>\n    <div class=\"contact__info\">\n        <p class=\"contact__info-item\"><img class=\"contact__photo\" src=\"{{contact.photo}}\" alt=\"\"></p>\n        <p class=\"contact__info-item\"><span class=\"contact__name\">{{contact.name || 'Имя не указано'}}</span></p>\n        <p class=\"contact__info-item\"><span class=\"contact__email\">{{contact.email}}</span></p>\n        <p class=\"contact__info-item\"><span class=\"contact__phone\">{{contact.phone || 'Телефон не указан'}}</span></p>\n    </div>\n</div>\n"

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = "<ul class=\"tools__list\">\n    <li class=\"tools__item tools__item_add-user\"\n        [routerLink]=\"['./new']\">\n        Добавить\n    </li>\n</ul>\n"

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts\">\n\n    <!-- Инструменты -->\n\n    <div class=\"contacts__tools\">\n        <app-contacts-tools></app-contacts-tools>\n    </div>\n\n    <!-- Контакты -->\n\n    <ul class=\"contacts__list\">\n        <li  class=\"contacts__item\"\n            *ngFor=\"let contact of contacts | contactFilter:filterForContacts\">\n            <app-contact [contact]=\"contact\">\n            </app-contact>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "<ul class=\"folders\">\n    <li class=\"folders__item\"\n        routerLinkActive=\"active\">\n        <a class=\"folders__link\"\n            [routerLink]=\"['./letters', 'inbox']\">\n            Входящие\n        </a>\n    </li>\n    <li class=\"folders__item\"\n        routerLinkActive=\"active\">\n        <a class=\"folders__link\"\n            [routerLink]=\"['./letters', 'sent']\">\n            Отправленные\n        </a>\n    </li>\n    <li class=\"folders__item\"\n        routerLinkActive=\"active\">\n        <a class=\"folders__link\"\n            [routerLink]=\"['./letters', 'spam']\">\n            Спам\n        </a>\n    </li>\n</ul>\n"

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "<div class=\"letter\"\n    *ngIf=\"letter\">\n\n    <!-- Инструменты -->\n\n    <div class=\"letter__tools\">\n        <app-tools [mailboxName]=\"mailboxName\" [letterId]=\"letterId\"></app-tools>\n    </div>\n\n    <!-- Письмо -->\n\n    <div class=\"letter__subject\">{{letter.subject}}</div>\n    <div class=\"letter__header\">\n        <div class=\"letter__from\">\n            <p class=\"letter__name\">{{letter.name}}</p>\n            <p class=\"letter__email\">{{letter.email}}</p>\n        </div>\n        <div class=\"letter__date\">{{letter.date | letterDate}}</div>\n    </div>\n    <div class=\"letter__body\">{{letter.body}}</div>\n</div>\n"

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = "<div class=\"letters\">\n\n    <!-- Инструменты -->\n\n    <div class=\"letters__tools\">\n        <app-tools [mailboxName]=\"mailboxName\"></app-tools>\n    </div>\n\n    <!-- Список писем -->\n\n    <ul class=\"letters__list\"\n        *ngIf=\"letters[0]\">\n        <li class=\"letters__item\"\n            *ngFor=\"let letter of letters | letterFilter:filterForLetters | sort:'date'\">\n\n            <!-- Чекбокс -->\n\n            <input class=\"letters__checkbox\"\n                type=\"checkbox\"\n                [checked]=\"checkedAll\"\n                (change)=\"onSelect($event.target.checked, letter.id)\">\n\n            <!-- Письмо -->\n\n            <div class=\"letters__letter\"\n                [routerLink]=\"['./', letter.id]\">\n                <p class=\"letters__letter-name\">{{(mailboxName === 'sent') ? letter.addressee : letter.name}}</p>\n                <p class=\"letters__letter-content\">\n                    <span class=\"letters__letter-subject\">{{letter.subject}}</span>&nbsp;&nbsp;-&nbsp;&nbsp;<span class=\"letters__letter-short-body\">{{letter.shortBody}}</span>\n                </p>\n                <p class=\"letters__letter-date\">{{letter.date | letterDate}}</p>\n            </div>\n        </li>\n    </ul>\n\n    <!-- Если писем нет -->\n    <p *ngIf=\"!letters[0] && !isLoading\">{{mailboxName | noLetters}}</p>\n</div>\n"

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "<div class=\"mailbox\">\n\n    <!-- Меню -->\n\n    <div class=\"mailbox__menu\">\n        <app-menu [mailbox]=\"mailbox\"></app-menu>\n    </div>\n\n    <!-- Основной контент -->\n\n    <div class=\"mailbox__main\">\n\n        <!-- Индикатор загрузки -->\n\n        <p class=\"mailbox__preloader\"\n            *ngIf=\"loading\"></p>\n\n        <!-- Сайдбар -->\n\n        <div class=\"mailbox__sidebar\">\n\n            <!-- Кнопки \"написать\" и \"обновить\" -->\n\n            <div class=\"mailbox__row\">\n                <a class=\"mailbox__write-new\"\n                    [routerLink]=\"['./letter', 'new']\">\n                    Написать\n                </a>\n                <button class=\"mailbox__update\"\n                    (click)=\"updatePage()\"></button>\n            </div>\n\n            <!-- Почтовые ящики -->\n\n            <div class=\"mailbox__folders\">\n                <app-folders></app-folders>\n            </div>\n\n            <!-- Реклама -->\n\n            <div class=\"mailbox__advertisement\">\n                <p>Здесь могла бы быть ваша реклама!</p>\n                <p><a href=\"#\" target=\"_blank\">Успейте заказать</a></p>\n            </div>\n        </div>\n\n        <!-- Контент -->\n\n        <div class=\"mailbox__content\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n\n    <!-- Футер -->\n\n    <div class=\"mailbox__footer\">\n        Приложение \"Почтовый ящик\" сделано с помощью Angular 2.\n    </div>\n</div>\n"

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "<ul class=\"menu\">\n    <li class=\"menu__contacts\">\n        <a class=\"menu__link\"\n            [routerLink]=\"['./contacts']\">\n            Контакты\n        </a>\n    </li>\n    <li class=\"menu_search\">\n        <app-search></app-search>\n    </li>\n    <li class=\"menu__user\">\n        <app-user-thumb [mailbox]=\"mailbox\"></app-user-thumb>\n    </li>\n</ul>\n"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "<form class=\"search\"\n    [formGroup]=\"searchForm\"\n    (ngSubmit)=\"seek(searchForm.controls['input'].value)\">\n    <input class=\"search__field\"\n        type=\"text\"\n        placeholder=\"Искать...\"\n        [formControl]=\"searchForm.controls['input']\">\n    <button  class=\"search__btn\"\n        type=\"submit\">\n    </button>\n</form>\n"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<div class=\"user\"\n    *ngIf=\"mailbox\">\n    <div class=\"user__info\">\n        <p class=\"user__name\">{{mailbox.name}}</p>\n        <p class=\"user__email\">({{mailbox.email}})</p>\n    </div>\n    <img class=\"user__photo\" src=\"{{mailbox.photo}}\" alt=\"\">\n    <button class=\"user__exit-btn\" (click)=\"onExit()\"></button>\n</div>\n"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "<div class=\"new-letter\">\n\n    <!-- Сообщение об ошибке -->\n\n    <p class=\"new-letter__error\"\n        *ngIf=\"notValidForm\">\n        Форма должна быть валидной!\n    </p>\n\n    <!-- Форма -->\n\n    <form class=\"new-letter__form\"\n        autocomplete=\"off\"\n        [formGroup]=\"newLetterForm\"\n        (ngSubmit)=\"sendLetter(newLetterForm.value)\">\n\n        <!-- Поле ввода адресата -->\n\n        <div class=\"new-letter__field\">\n            <label class=\"new-letter__label\"\n                for=\"addressee\">\n                Кому:\n            </label>\n\n            <input class=\"new-letter__input\"\n                id=\"addressee\"\n                type=\"text\"\n                [class.error]=\"!newLetterForm.controls['addressee'].valid\n                    && newLetterForm.controls['addressee'].touched\"\n                [class.valid]=\"newLetterForm.controls['addressee'].valid\n                    && newLetterForm.controls['addressee'].touched\"\n                [formControl]=\"newLetterForm.controls['addressee']\">\n\n            <!-- Всплывающее окно со списком возможных адресатов из списка контактов -->\n\n            <ul class=\"new-letter__possible-contact-list\"\n                (outsideClick)=\"outsideClick()\"\n                *ngIf=\"possibleContacts\">\n                <li class=\"new-letter__possible-contact\"\n                    *ngFor=\"let possibleContact of possibleContacts\"\n                    (click)=\"selectContact(possibleContact)\">\n\n                    <span class=\"new-letter__possible-contact-name\">{{possibleContact.name}}</span>&nbsp;{{possibleContact.email}}\n\n                </li>\n            </ul>\n        </div><!-- .new-letter__field -->\n\n        <!-- Поле ввода темы письма -->\n\n        <div class=\"new-letter__field\">\n            <label class=\"new-letter__label\"\n                for=\"subject\">\n                Тема:\n            </label>\n\n            <input class=\"new-letter__input\"\n                id=\"subject\"\n                type=\"text\"\n                [class.error]=\"!newLetterForm.controls['subject'].valid\n                    && newLetterForm.controls['subject'].touched\"\n                [class.valid]=\"newLetterForm.controls['subject'].valid\n                    && newLetterForm.controls['subject'].touched\"\n                [formControl]=\"newLetterForm.controls['subject']\">\n        </div><!-- .new-letter__field -->\n\n        <!-- Поле ввода письма -->\n\n        <div class=\"new-letter__field\">\n            <textarea class=\"new-letter__body\"\n                [formControl]=\"newLetterForm.controls['body']\"></textarea>\n        </div><!-- .new-letter__field -->\n\n        <!-- Кнопка отправки письма -->\n\n        <button class=\"new-letter__send-btn\"\n            type=\"submit\">\n            Отправить\n        </button><!-- .new-letter__send-btn -->\n\n    </form><!-- .new-letter__form -->\n</div><!-- .new-letter -->\n"

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "<ul class=\"tools__list\">\n    <li class=\"tools__item tools__item_delete\"\n        (click)=\"onDelete()\">\n        Удалить\n    </li>\n    <li class=\"tools__item tools__item_spam\"\n        (click)=\"onSpam()\">Спам</li>\n</ul>\n"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "<ul class=\"tools__list\">\n    <li class=\"tools__item tools__item_all\">\n        <input type=\"checkbox\"\n            [checked]=\"checkedAll\"\n            (change)=\"onSelectAll($event.target.checked)\">\n    </li>\n    <li class=\"tools__item tools__item_delete\"\n        (click)=\"onDelete()\">\n        Удалить\n    </li>\n    <li class=\"tools__item tools__item_spam\"\n        (click)=\"onSpam()\">Спам</li>\n</ul>\n"

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = "<ul class=\"tools__list\">\n    <li class=\"tools__item tools__item_delete\"\n        (click)=\"onDelete()\">\n        Удалить\n    </li>\n</ul>\n"

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "<ul class=\"tools__list\">\n    <li class=\"tools__item tools__item_all\">\n        <input type=\"checkbox\"\n            [checked]=\"checkedAll\"\n            (change)=\"onSelectAll($event.target.checked)\">\n    </li>\n    <li class=\"tools__item tools__item_delete\"\n        (click)=\"onDelete()\">\n        Удалить\n    </li>\n</ul>\n"

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "<ul class=\"tools__list\">\n    <li class=\"tools__item tools__item_delete\"\n        (click)=\"onDelete()\">\n        Удалить\n    </li>\n    <li class=\"tools__item tools__item_not-spam\"\n        (click)=\"onNotSpam()\">Не спам</li>\n</ul>\n"

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<ul class=\"tools__list\">\n    <li class=\"tools__item tools__item_all\">\n        <input type=\"checkbox\"\n            [checked]=\"checkedAll\"\n            (change)=\"onSelectAll($event.target.checked)\">\n    </li>\n    <li class=\"tools__item tools__item_delete\"\n        (click)=\"onDelete()\">\n        Удалить\n    </li>\n    <li class=\"tools__item tools__item_not-spam\"\n        (click)=\"onNotSpam()\">Не спам</li>\n</ul>\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<!-- Панели инструментов для почтовых ящиков -->\n<div *ngIf=\"!letterId\">\n    <div [ngSwitch]=\"mailboxName\">\n        <app-inbox-tools *ngSwitchCase=\"'inbox'\"></app-inbox-tools>\n        <app-sent-tools *ngSwitchCase=\"'sent'\"></app-sent-tools>\n        <app-spam-tools *ngSwitchCase=\"'spam'\"></app-spam-tools>\n    </div>\n</div>\n<!-- Панели инструментов для писем -->\n<div *ngIf=\"letterId\">\n    <div [ngSwitch]=\"mailboxName\">\n        <app-inbox-letter-tools *ngSwitchCase=\"'inbox'\"\n            [letterId]=\"letterId\"></app-inbox-letter-tools>\n        <app-sent-letter-tools *ngSwitchCase=\"'sent'\"\n            [letterId]=\"letterId\"></app-sent-letter-tools>\n        <app-spam-letter-tools *ngSwitchCase=\"'spam'\"\n            [letterId]=\"letterId\"></app-spam-letter-tools>\n    </div>\n</div>\n"

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mailbox_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_data__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactsService = (function () {
    function ContactsService(_mailboxService, _router) {
        this._mailboxService = _mailboxService;
        this._router = _router;
        this._contactsStream = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this._urlUp = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    /**
     * Возвращает поток из контакта по id.
     */
    ContactsService.prototype.getContact = function (contactId) {
        return __WEBPACK_IMPORTED_MODULE_6__app_data__["a" /* mailbox */].getContact(contactId);
    };
    /**
     * Возвращает поток из массива контактов по значению.
     */
    ContactsService.prototype.getContactsByValue = function (value) {
        return __WEBPACK_IMPORTED_MODULE_6__app_data__["a" /* mailbox */].getContacts(value);
    };
    /**
     * Возвращает поток из массива контактов.
     */
    ContactsService.prototype.requestContacts = function () {
        var _this = this;
        console.log('SERVER REQUEST');
        __WEBPACK_IMPORTED_MODULE_6__app_data__["a" /* mailbox */].getContacts()
            .subscribe(function (contacts) {
            _this.updateContacts().next(contacts);
        });
    };
    /**
     * Обновление списка контактов.
     */
    ContactsService.prototype.updateContacts = function () {
        console.log('UPDATING CONTACTS LIST');
        if (this._contactsStream.closed) {
            this._contactsStream = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        }
        return this._contactsStream;
    };
    /**
     * Возвращает поток, который говорит, подняться вверх по url.
     */
    ContactsService.prototype.urlUp = function () {
        if (this._urlUp.closed) {
            this._urlUp = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        }
        return this._urlUp;
    };
    /**
     * Добавляет контакт.
     */
    ContactsService.prototype.saveContact = function (contact) {
        var _this = this;
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        __WEBPACK_IMPORTED_MODULE_6__app_data__["a" /* mailbox */].saveContact(contact)
            .subscribe(function () {
            console.log('CONTACT SAVED');
            _this.urlUp().next(true);
        });
        return this;
    };
    /**
     * Удаляет контакт.
     */
    ContactsService.prototype.removeContact = function (contactId) {
        var _this = this;
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        __WEBPACK_IMPORTED_MODULE_6__app_data__["a" /* mailbox */].removeContact(contactId)
            .subscribe(function (restContacts) {
            console.log('CONTACT WAS REMOVED');
            // Обновляет контакты.
            _this.updateContacts().next(restContacts);
        });
        return this;
    };
    ContactsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__mailbox_service__["a" /* MailboxService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__mailbox_service__["a" /* MailboxService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ContactsService);
    return ContactsService;
    var _a, _b;
}());
//# sourceMappingURL=contacts.service.js.map

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(393);


/***/ })

},[894]);
//# sourceMappingURL=main.bundle.js.map