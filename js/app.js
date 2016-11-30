var the_list = new Vue({
    el: '#thelist',
    data: {
        todos: [ ]
    },
    methods: {
        remMessage: function (theid) {
            arr = 0;
            var BreakException = {};
            try {
                the_list.todos.forEach(function (element) {
                    if (element.id === theid) {
                        throw BreakException
                    } else {
                        arr += 1;
                    }
                });
            } catch (e) {
                if (e !== BreakException) throw e;
            }
            the_list.todos.splice(arr, 1);
            localStorage.setItem('list', JSON.stringify(the_list.todos));
        }
    }
});
var counter = 0;

if (localStorage.getItem("list") === null){
    the_list.todos.push({text: 'Example', details: 'You can delete this message :D', 'id': 0});
} else {
    var prevlist = JSON.parse(localStorage.getItem('list'));
    prevlist.forEach(function (element) {
        the_list.todos.push({'text': element.text, details: element.details, 'id': counter});
        counter += 1;
    });
}

var newstuff = new Vue({
    el: '#newstuff',
    data: {
        message: '',
        messageDetails: ''
    },
    methods: {
        addMessage: function () {
            counter += 1;
            the_list.todos.push({text: this.message, details: this.messageDetails, 'id': counter});

            this.message = '';
            this.messageDetails = '';
            localStorage.setItem('list', JSON.stringify(the_list.todos));
        }
    }
});