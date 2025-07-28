import {Github} from "./modules/Github";
import {Ui} from "./modules/Ui";
document.addEventListener('DOMContentLoaded', ()=>{
    const input = document.querySelector('#search'),
    git = new Github(),
    ui = new Ui();
    input.addEventListener('keyup', ()=>{
        const userText = input.value.trim();
       if (userText !== '') {
            git.get(userText).then(data=>{
                if (data.profile.message === 'Not Found') {
                    ui.clear()
                    ui.showAlert()
                } else {
                    ui.showProfile(data.profile)
                    ui.showRepo(data.repository)
                }
            })
       } else {
            ui.clear()
       }
    })
})
