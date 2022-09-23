const badge = document.querySelector('.notifications__title-badge');
const readAllBtn = document.querySelector('.notifications__action');

function setNotificationBadge() {
    const unreadedNotification = document.querySelectorAll('.notification--unreaded');
    badge.innerHTML = unreadedNotification.length;
}

const readAll = () => {
    const [...unreadedNotification] = document.querySelectorAll('.notification--unreaded');

    unreadedNotification.reverse().forEach((item, index) => {
        setTimeout(()=>{
            item.classList.remove('notification--unreaded');
            setNotificationBadge();
        }, (index + 1) * 300)  
    });
}
const unreadedNotification = document.querySelectorAll('.notification--unreaded');
console.log()

readAllBtn.addEventListener('click', readAll);

setNotificationBadge();
