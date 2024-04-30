class RegisterForm extends Form {
    constructor(){
        super()


    this.addClass('RegisterForm')

    const nameField = new Field('name', 'text', 'Name')
    nameField.setPlaceholder('name')

    const surnameField = new Field('username', 'text', 'Username')
    surnameField.setPlaceholder('username')

    const emailField = new Field('email', 'email', 'E-mail')
    emailField.setPlaceholder('name@example.com')

    const usernameField = new Field('username', 'text', 'Username')
    usernameField.setPlaceholder('username')

    const passwordField = new Field('password', 'password', 'Password')
    passwordField.setPlaceholder('password')

    const passwordRepeatField = new Field('password', 'password', 'Password repeat')
    passwordRepeatField.setPlaceholder('repeat password')

    const submitButton = new SubmitButton('Register')

    const feedbackPanel = new Component('p')
    feedbackPanel.addClass('Feedback')

    this.add(nameField)
    this.add(surnameField)
    this.add(emailField)
    this.add(usernameField)
    this.add(passwordField)
    this.add(passwordRepeatField)
    this.add(submitButton)
    this.add(feedbackPanel)
}



getName() {
    const nameField = this.children[0]

    return nameField.getValue()
}

getSurname() {
    const surnameField = this.children[1]

    return surnameField.getValue()
}

getEmail() {
    const emailField = this.children[2]

    return emailField.getValue()
}

getUsername() {
    const usernameField = this.children[3]

    return usernameField.getValue()
}

getPassword() {
    const passwordField = this.children[4]

    return passwordField.getValue()
}

getPasswordRepeat() {
    const passwordFieldRepeat = this.children[5]

    return passwordFieldRepeat.getValue()
}

setFeedback(message, level) {
    const feedbackPanel = this.children[this.children.length - 1]
    if (level === 'success')
    feedbackPanel.addClass('success')

    feedbackPanel.setText(message)
}

clear() { // method overriding
    super.clear()

    const feedbackPanel = this.children[this.children.length - 1]

    feedbackPanel.setText('')
    feedbackPanel.removeClass('success')
}
}