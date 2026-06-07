let deferredPrompt;

const installBtn =
    document.getElementById(
        "install-btn"
    );

window.addEventListener(
    "beforeinstallprompt",
    e => {

        e.preventDefault();

        deferredPrompt = e;

        installBtn.hidden = false;

    }
);

installBtn.addEventListener(
    "click",
    async () => {

        deferredPrompt.prompt();

        await deferredPrompt.userChoice;

    }
);