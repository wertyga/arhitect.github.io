import dataNews from '../../../data/dataNews';

import { Link } from 'react-router-dom';

export function archive(arrData) {
    let dateObj = {};
    let dateArr = arrData.map(item => item.split('/')[1] + '.' + item.split('/')[2]);
    let resultArr = [];
    let month = new Date().toLocaleString().split(',')[0].split('.')[1];
    let year = new Date().toLocaleString().split(',')[0].split('.')[2];

    dateArr.forEach(item => {
        let yearNews = item.split('.')[1];
        let monthNews = item.split('.')[0];

        if((yearNews === year) && (monthNews === month)) return;
        if(dateObj[item]) {
            dateObj[item]++
        } else { dateObj[item] = 1 }
    });

    for(let key in dateObj) {
        let date = key + ' ' + '(' + dateObj[key] + ')';
        resultArr.push(<Link key={key} style={{ display: 'block' }} to={'/news/archive/' + key}>{date}</Link>)
    }
    return resultArr;

};

export const Archive = createReactClass ({
    render() {
        return (
            <div>
                <div className="freshHeader archiveHeader">
                    <h3>Архив</h3>
                </div>
                <div className="row">
                    <div className="freshNew clearfix">
                        <div className="archive">
                            {archive(dataNews.map(item => item.date))}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
});
