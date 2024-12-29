

const   androidIsset        = typeof Android        === 'undefined' ? false : true;
const   iosIsset            = typeof window.webkit  === 'undefined' ? false : true;
const   currentVisitorFrom  = androidIsset || iosIsset ? 'mobile' : 'web';



const ios = (methodName, value) => {
    let sendData = {
        method_name: methodName,
        value: value
    }
    window.webkit.messageHandlers.Mobile.postMessage(sendData)
}



export default {
    currentVisitor() {
        return currentVisitorFrom;
    },
    mobileOsType() {
        if (currentVisitorFrom !== 'mobile') return 'web';
        if (currentVisitorFrom === 'mobile' && iosIsset) return 'ios';
        if (currentVisitorFrom === 'mobile' && androidIsset) return 'android';
        return '';
    },
    getSessionkey() {
        const urlToSearch = new URLSearchParams(window.location.search);
        let value = urlToSearch.get('sk');
        value = value ? value : null;

        if (currentVisitorFrom === 'web') return value;
        if (iosIsset) return value;

        return Android.getSessionkey();
    },
    openProfile(id) {
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.openProfile(id);
            return ;
        }
        if (iosIsset) {
            ios('openProfile', id)
            return;
        }
    },
    openFamilyProfile(id) {
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.openFamilyProfile(id);
            return;
        }
        if (iosIsset) {
            ios('openFamilyProfile', id);
            return;
        }
    },
    openRoom(uid) {
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.openRoom(uid);
            return ;
        }
        if (iosIsset) {
            ios('openRoom', uid)
            return;
        }
    },
    openWebview(url) {
        console.log(url);
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.openWebview(url);
            return ;
        }
        if (iosIsset) {
            ios('openWebview', url)
            return;
        }
    },
    closeWindow() {
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.closeWindow();
            return ;
        }
        if (iosIsset) {
            ios('closeWindow', null)
            return;
        }

    },
    showToast(text) {
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.showToast(text);
            return ;
        }
        if (iosIsset) {
            ios('showToast', text)
            return;
        }
    },
    hideAppbar() {
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            // Android.hideAppbar();
            return ;
        }
        if (iosIsset) {
            ios('hideAppbar', null)
            return;
        }
    },
    openChargePage() {
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.openChargePage();
            return ;
        }
        if (iosIsset) {
            ios('openChargePage', null)
            return;
        }
    },
    backgroundTransparent() {
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.backgroundTransparent();
            return ;
        }
        if (iosIsset) {
            ios('backgroundTransparent', null)
            return;
        }
    },
    fullScreen() {
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.fullScreen();
            return ;
        }
        if (iosIsset) {
            ios('fullScreen', null)
            return;
        }
    },
    walletPaymentMethod(offer) {
        offer = JSON.stringify(offer);
        console.log(offer)
        
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.walletPaymentMethod(offer);
            return ;
        }
        if (iosIsset) {
            ios('walletPaymentMethod', offer)
            return;
        }
    },
    openChat(id) {
        
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.openChatOneToOne(parseInt(id));
            return ;
        }
        if (iosIsset) {
            ios('openChat', parseInt(id))
            return;
        }
    },
    openWhatsApp(number) {
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.openWhatsApp(number);
            return ;
        }
        if (iosIsset) {
            ios('openWhatsApp', number)
            return;
        }
    },
    openPost(id) {
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.openPost(id);
            return ;
        }
        if (iosIsset) {
            ios('openPost', id)
            return;
        }
    },
    initLuckyBag(data) {
        if (currentVisitorFrom === 'web') return ;

        if (androidIsset) {
            Android.initLuckyBag(data);
            return ;
        }
        if (iosIsset) {
            ios('initLuckyBag', data)
            return;
        }
    },
}