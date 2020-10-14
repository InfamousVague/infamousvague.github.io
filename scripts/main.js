document.title = 'RETROPRONGHORN';
setInterval(() => {
    document.title = 'RETROPRONGHORN';
    setTimeout(() => {
        document.title = 'R3TR0PR0NGH04N';
    }, 200);
    setTimeout(() => {
        document.title = 'RETROPRONGHORN';
    }, 500);
    setTimeout(() => {
        document.title = 'R3TR0PR0NGH04N';
    }, 800);
    setTimeout(() => {
        document.title = 'RETR0PRRRGHORN';
    }, 900);
    setTimeout(() => {
        document.title = 'RET-HIRE_ME-GHN';
    }, 1000);
    setTimeout(() => {
        document.title = 'RETROPRONGHORN';
    }, 1200);
}, 3000);

setInterval(() => {
    const loading = document.getElementById('loading')
    loading.innerText = "."
    setTimeout(() => {
        loading.innerText = ".."
    }, 500)
    setTimeout(() => {
        loading.innerText = "..."
    }, 1000)
    setTimeout(() => {
        loading.innerText = "...."
    }, 1500)
}, 2000)