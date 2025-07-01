grammar();words_check();
function grammar(){
const affirmative_solution ={
        tobe: ['am','is','are'],
        verb: ['ing','ing','ing']
    }

//affermative
const affirmative_btn = document.querySelector('.affirmative_button')

affirmative_btn.addEventListener('click', function(){
    const input_tobe = Array.from(document.getElementsByClassName('tobe1'))
    const input_verb = Array.from(document.getElementsByClassName('verb1'))

    const input_tobe_arr = []
    const input_verb_arr = []
    for(i=0;i<input_tobe.length;i++){
        input_tobe_arr[i] = input_tobe[i].value  
        input_verb_arr[i] = input_verb[i].value  

        if(input_tobe_arr[i] == 'undefined'){
            input_tobe[i].classList.add('check_false')
        } 
        else{
            if( input_tobe_arr[i] == affirmative_solution.tobe[i]){
                input_tobe[i].classList.add('check_true')
            }  
            else{
                input_tobe[i].classList.add('check_false')
            }  
        }   
        
        if(input_verb_arr[i] == 'undefined'){
            input_verb[i].classList.add('check_false')
        } 
        else{
            if( input_verb_arr[i] == affirmative_solution.verb[i]){
                input_verb[i].classList.add('check_true')
            }  
            else{
                input_verb[i].classList.add('check_false')
            }  
        }  

    }   
})

//question
const question_solution ={
    tobe: ['am','is','are'],
    verb: ['ing','ing','ing']
}

const question_btn = document.querySelector('.question_button')

question_btn.addEventListener('click', function(){
    const input_tobe = Array.from(document.getElementsByClassName('tobe2'))
    const input_verb = Array.from(document.getElementsByClassName('verb2'))

    const input_tobe_arr = []
    const input_verb_arr = []
    for(i=0;i<input_tobe.length;i++){
        input_tobe_arr[i] = input_tobe[i].value  
        input_verb_arr[i] = input_verb[i].value  

        if(input_tobe_arr[i] == 'undefined'){
            input_tobe[i].classList.add('check_false')
        } 
        else{
            if( input_tobe_arr[i] == question_solution.tobe[i]){
                input_tobe[i].classList.add('check_true')
            }  
            else{
                input_tobe[i].classList.add('check_false')
            }  
        }   
        
        if(input_verb_arr[i] == 'undefined'){
            input_verb[i].classList.add('check_false')
        } 
        else{
            if( input_verb_arr[i] == question_solution.verb[i]){
                input_verb[i].classList.add('check_true')
            }  
            else{
                input_verb[i].classList.add('check_false')
            }  
        }  

    }   
})

//negative
const negative_solution ={
    tobe: ['am','is','are'],
    verb: ['ing','ing','ing']
}

const negative_btn = document.querySelector('.negative_button')

negative_btn.addEventListener('click', function(){
    const input_tobe = Array.from(document.getElementsByClassName('tobe3'))
    const input_verb = Array.from(document.getElementsByClassName('verb3'))

    const input_tobe_arr = []
    const input_verb_arr = []
    for(i=0;i<input_tobe.length;i++){
        input_tobe_arr[i] = input_tobe[i].value  
        input_verb_arr[i] = input_verb[i].value  

        if(input_tobe_arr[i] == 'undefined'){
            input_tobe[i].classList.add('check_false')
        } 
        else{
            if( input_tobe_arr[i] == negative_solution.tobe[i]){
                input_tobe[i].classList.add('check_true')
            }  
            else{
                input_tobe[i].classList.add('check_false')
            }  
        }   
        
        if(input_verb_arr[i] == 'undefined'){
            input_verb[i].classList.add('check_false')
        } 
        else{
            if( input_verb_arr[i] == negative_solution.verb[i]){
                input_verb[i].classList.add('check_true')
            }  
            else{
                input_verb[i].classList.add('check_false')
            }  
        }  

    }   
})
}

function words_check(){
    const word_check_button = this.document.querySelector('.word_check_button')
    word_check_button.addEventListener('click', function(){
        const counter = Array.from(document.getElementsByClassName('number'))
        for(i=0;i<counter.length;i++){
            counter[i].innerHTML = i + 1;
        }
    
        words_translate = ['perhaps','mine','improve','increase','rise','cross','scratch','tie','wave','shoelace','hurry']
        
        const word_translate_input = Array.from(document.getElementsByClassName('input_word'))
        word_translate_input_arr = []
        for(i=0;i<word_translate_input.length;i++){
            word_translate_input_arr[i] = word_translate_input[i].value  
            word_translate_input_arr[i] = word_translate_input[i].value  
    
            if(word_translate_input_arr[i] == 'undefined'){
                word_translate_input[i].classList.add('check_false')
            } 
            else{
                if( word_translate_input_arr[i] == words_translate[i]){
                    word_translate_input[i].classList.add('check_true')
                }  
                else{
                    word_translate_input[i].classList.add('check_false')
                }  
            }   
        }
    })
}


