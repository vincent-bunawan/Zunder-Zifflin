const dataAll = document.getElementById("data")

const queryParam = window.location.search.slice(1)
const datas = queryParam.split("&")

for(let i = 0; i < datas.length ; i++){
    const data = datas[i].split("=")
    //cara1
    const name = data[0]
    const value = data[1].replace('+', ' ')
    //cara2
    const [name,value] = data.replace('+',' ')
    dataAll.innerHTML += `<p> ${name} : ${value}</p>`
}