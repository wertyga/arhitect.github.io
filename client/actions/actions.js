import { dataProjects } from '../../data/dataProjects';
import dataNews from '../../data/dataNews';

export const SET_PROJECT = 'SET_PROJECT';
export const MONTH_NEWS = 'MONTH_NEWS';
export const ADD_ONE_NEWS = 'ADD_ONE_NEWS';
export const ARHIVE_NEWS = 'ARHIVE_NEWS';
export const SEND_MAIL = 'SEND_MAIL';


function mailSend(sendObj) {
    return {
        type: SEND_MAIL,
        sendObj
    }
};
export function sendMail(sendObj) {
    return dispatch => {
        return new Promise((res, rej) => {
            let emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(!sendObj.email || !emailReg.test(sendObj.email)) {
                res(false)
            } else if(sendObj) { res(dispatch(mailSend(sendObj))) };
        })
    }
};


function projectFetch(project) {
    return {
        type: SET_PROJECT,
        project
    }
};
export function fetchProject(id) {
    return (dispatch) => {
        return new Promise((res, rej) => {
                let findProject = dataProjects.find(item => item.id === id);
                if(!findProject) {
                    rej(new Error)
                } else {
                    res(dispatch(projectFetch(findProject)));
                }
        })
    }
};

export function fetchMonthNews(date) {
    return dispatch => {
        return new Promise((res, rej) => {
                let month = date.toLocaleString().split(',')[0].split('.')[1];
                let year = date.toLocaleString().split(',')[0].split('.')[2];

                let findNews = dataNews.filter(news => {
                    let yearNews = news.date.split('/')[2];
                    let monthNews = news.date.split('/')[1];

                    if (yearNews === year) {
                        if (monthNews === month) {
                            return news;
                        }
                    }
                });
                res(findNews)
            }).then(res => dispatch(addMonthNews(res)));
    }

};
function addMonthNews(news) {
    return {
        type: MONTH_NEWS,
        news: {
            news
        }
    }
};

export function fetchOneNews(id) {
    return dispatch => {
        return new Promise ((res, rej) => {
            let findNews = dataNews.find(item => item.header === id);
            if(!findNews) {
                res(false)
            } else {
                res(dispatch(addOneNews(findNews)));
            };
        })

    }
};
function addOneNews(news) {
    return {
        type: ADD_ONE_NEWS,
        news: {
            news: [news]
        }
    }
};

export function fetchArchiveMonth(month) {
    return dispatch => {
        return new Promise((res, rej) => {
            let needMonth = month.split('.')[0];
            let needYear = month.split('.')[1];
            let findMonth = dataNews.filter(item => {
                let monthNews = item.date.split('/')[1];
                let yearNews = item.date.split('/')[2];

                if(yearNews === needYear) {
                    if(monthNews === needMonth) {
                        return item;
                    }
                }
            });
            res(findMonth);
        }).then(res => dispatch(archiveMonthFetch(res)))

    }
};
function archiveMonthFetch(month) {
    return {
        type: ARHIVE_NEWS,
        news: {
            news: month
        }
    }
};