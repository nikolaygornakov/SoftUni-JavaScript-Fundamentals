function formFiller(data) {
    let [username, email, phone] = [data.shift(), data.shift(), data.shift()];

    data = data.replace(/<![a-zA-Z]+!>/g, username);
    data.replace(/<@[a-zA-Z]+@>/g, email);
    data.replace(/<\+[a-zA-Z]+\+>/g, phone);

    console.log(data);
}

formFiller(['Pesho',
'pesho@softuni.bg',
'90-60-90',
'Hello, <!username!>!',
'Welcome to your Personal profile.',
'Here you can modify your profile freely.',
'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
'Your current phone number is: <+number+>. Would you like to change that? (Y/N))'])


//======================================================================================================================
// Different solution

function fillForm(data) {
    let [username, email, phone] =
        [data.shift(), data.shift(), data.shift()];
    data.forEach(line => {
        line = line.replace(/<![a-zA-Z]+!>/g, username);
        line = line.replace(/<@[a-zA-Z]+@>/g, email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
        console.log(line);
    });
}


//fillForm(['Pesho',
//     'pesho@softuni.bg',
//     '90-60-90',
//     'Hello, <!username!>!',
//     'Welcome to your Personal profile.',
//     'Here you can modify your profile freely.',
//     'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
//     'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
//     'Your current phone number is: <+number+>. Would you like to change that? (Y/N))'])