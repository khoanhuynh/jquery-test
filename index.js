var arr = JSON.parse(localStorage.getItem('list'))
console.log(arr);
if(!arr) arr = []
$( document ).ready(function() {
    displayItem();
});
const displayItem = ()=>{
    $(".main").html("")
    row = ""
    arr.map((item,key)=>{
        row+=`
        <div class="item row">
        <div class="name col-md-9"> <h5>${item.name}</h5></div>
        <div class="col-md-3 text-right"> 
            ${item.completed?`<i style="font-size: 30px;cursor:pointer;padding-right: 20px; color: green;" onclick="update(${key})" class="fa fa-check" ></i>`:`<i style="font-size: 30px;cursor:pointer;padding-right: 20px; color: gray;" onclick="update(${key})" class="fa fa-exclamation-triangle"></i>`}
            <i style="font-size: 30px;cursor:pointer;padding-right: 20px;color: red;" onclick="remove(${key})" class="fa fa-times"></i>
        </div>
        </div>
        `;
    });
    $(".main").html(row);
}
$("#add").click(function(){ 
    if($("#name").val()){
        arr.unshift({
            "name":$("#name").val(),
            "completed":false});
        saveLocal()
    }
    $("#name").val("");
    displayItem();
})
$("#clear").click(function(){ 
    arr = []
    saveLocal()
    displayItem();
});
const saveLocal = () =>{
    localStorage.setItem('list',JSON.stringify(arr));
}
const remove = (id) =>{
    arr.splice(id, 1);
    saveLocal();
    displayItem()
}
const update = (id) =>{
    arr[id].completed = !arr[id].completed
    saveLocal()
    displayItem()
}

