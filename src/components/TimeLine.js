import React,{Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBeer, FaBriefcase, FaArchive, FaEnvelope, FaBullhorn, FaScroll } from 'react-icons/fa';

export default class TimeLine extends Component{

    constructor(props) {
        super(props);
        this.state = {
          contacts: [],
          albums:[],
          patients: []
        };
      }   

render(){
return(
<div>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="29/3/2020 - "
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Elektronická žiadosť o stavebné povolenie</h3>
    <h4 className="vertical-timeline-element-subtitle">Stavebný úrad Senec</h4>
    <p><b>Samostatné prílohy (nie je možné ich získať z úradov):</b><br/>
    <li>súhlas prípadných spoluvlastníkov pozemku s výstavbou</li>
    <li>stavebný dozor</li>
    <li>poplatok</li>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="18/3/2020-23/3/2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaArchive />}
  >
    <h3 className="vertical-timeline-element-title">Žiadosť o vodovodnú a kanalizačnú prípojku</h3>
    <h4 className="vertical-timeline-element-subtitle">Bratislavské vodárne a kanalizácie</h4>
    <p>
      Situačná mapka
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="23/3/2020- 25/3/2020"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaEnvelope />}
  >
    <h3 className="vertical-timeline-element-title">Žiadosť o elektrickú prípojku</h3>
    <h4 className="vertical-timeline-element-subtitle">Západoslovenská energetika ZSE</h4>
    <p>
      Situačná mapka
    </p>
    </VerticalTimelineElement>  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="17/3/2020-18/3/2020"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaEnvelope />}
  >
    <h3 className="vertical-timeline-element-title">Žiadosť o plynovú prípojku</h3>
    <h4 className="vertical-timeline-element-subtitle">SPP Distribúcia</h4>
    <p>
      Situačná mapka
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="17/3/2020-22/3/2020"
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaArchive />}
  >
    <h3 className="vertical-timeline-element-title">Vyjadrenie stanoviska správcu telekomunikčných sietí</h3>
    <h4 className="vertical-timeline-element-subtitle">Slovak telekom</h4>
    <p>
      Situačná mapka
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="11/3/2020-15/3/2020"
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaArchive />}
  >
    <h3 className="vertical-timeline-element-title">Uzemné rozhodnutie o umiestnení stavby, súhlas obce s malým zdrojom znečistenia</h3>
    <h4 className="vertical-timeline-element-subtitle">Obecný úrad Nová Dedinka</h4>
    <p>Obsahuje žiadosť, poplatok
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="10/3/2020-11/3/2020"
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaArchive />}
  >
    <h3 className="vertical-timeline-element-title">Elektronický výpis z listu vlastníctva</h3>
    <h4 className="vertical-timeline-element-subtitle">Katastrálny úrad Senec</h4>
    <p>Obsahuje žiadosť, kópiu katastrálnej mapy, poplatok
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="10/3/2020"
    iconStyle={{ background: 'rgb(204, 204, 82)', color: '#fff' }}
    icon={<FaBullhorn />}
  >
    
    <h3 className="vertical-timeline-element-title">Začatie konania, predbežné schválenie projektu</h3>
    <h4 className="vertical-timeline-element-subtitle">Stavebný úrad Senec</h4>
    <p>Obsahuje projekt stavby (statika, elektrina, zdravotechnika, plyn, vykurovanie)
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>)
}
}