// document.addEventListener('keydown', (event) =>{
//     console.log('yes')
//     const currentFocusEl = document.activeElement;

//     if(event.key === 'Tab'){
//         return;
//     };

//     if(event.key === 'Enter' || event.key === ' '){
//         if(currentFocusEl.tagName.toLocaleLowerCase() === 'summary'){
//             const detailsEl = currentFocusEl.closest('details');
//             if(detailsEl){
//                 detailsEl.open = !detailsEl.open;
//             };
//         };
//     };

// });             