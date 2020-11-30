import moment  from "moment";

//Liskov Substitution principle
class MomentLocale {
        
    constructor(locale){
        this.locale = locale;
    }

    getLocale(){
        return this.locale
    }

    mainLocale(){
        moment.updateLocale('en', {
            months : [
                "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
                "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
            ],
            week:{dow:1}
        });
    }
       
}

class MomentUpdateLocaleEn extends MomentLocale{

    constructor(locale){
        super()
        this.locale = locale;
    }

    mainLocale(){
        moment.updateLocale('en', {
            months : [
                "January", "February", "March", "April", "May", "June", "Jule",
                "August", "September", "October", "November", "December"
            ],
            week:{dow:1}
        });
    }

}


export default  function changeLocale(locale){
    debugger;
    if(locale === 'ru'){
        const ordinaryMoment = new MomentLocale("ru")
        ordinaryMoment.mainLocale()
    }else if(locale === 'en'){
        const englishMoment = new MomentUpdateLocaleEn("en")
        englishMoment.mainLocale()
    }
}

    
  
