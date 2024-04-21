// const getStoredReadList  = () =>{
//     const storedReadList = localStorage.getItem('readList');
//     if(storedReadList){
//         return JSON.parse(storedReadList);     
//     }
//     return [];
// }



// const saveReadList = bookId =>{
//     const storedReadList = getStoredReadList();
//     const exists = storedReadList.find(id => id === bookId);
//     if(!exists){
//         storedReadList.push(bookId);
//         localStorage.setItem('readList', JSON.stringify(storedReadList));
//     }

// }

// export { getStoredReadList ,saveReadList}


