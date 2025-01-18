

const copytext = document.getElementById("year");


const year = new Date().getFullYear()

console.log(year)

copytext.innerHTML = year




const LastModifiedText = document.getElementById("lastmodified")


const LastModifiedDate = document.lastModified


LastModifiedText.innerHTML = `Last Modified: ${LastModifiedDate}`