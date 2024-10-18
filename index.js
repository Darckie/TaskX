

function toggleExpand(optionId) {
    // logic to get clicked opt...
    const option = document.getElementById(optionId);
    let total = document.getElementById('value');
    // get all opt.
    const allOptions = document.querySelectorAll('.product-option');




    // remove active and expend classes ----
    allOptions.forEach(opt => {
        opt.classList.remove('active');
        const details = opt.querySelector('.details');
        const shifterX = opt.querySelector('.unshift');
        if (details) {
            shifterX.classList.remove('shift');
            details.classList.remove('expand');
        }
    });

    // now add 
    const details = option.querySelector('.details');
    const shifterX = option.querySelector('.unshift');
    if (details) {
        shifterX.classList.add('shift');
        details.classList.add('expand');
        option.classList.add('active');

        //logic to set total
        const itemsvalue=option.querySelector('.left').textContent;
        total.textContent=itemsvalue.substring(0,10);
    }
}



const submit = () => {
    alert("This site is currently under construction. Please check back after the next update!");
}
