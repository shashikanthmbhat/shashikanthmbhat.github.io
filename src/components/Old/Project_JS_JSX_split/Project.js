// ============================================================
// Project.js
// Project Images + Project Constants / Data
// ============================================================


// ============================================================
// PROJECT IMAGES
// ============================================================

import Pproject11 from '../assets/Project_Imgs/Project_1/01_Home.png'
import Pproject12 from '../assets/Project_Imgs/Project_1/02_MRD.png'
import Pproject13 from '../assets/Project_Imgs/Project_1/03_Admn_Desk.png'
import Pproject14 from '../assets/Project_Imgs/Project_1/04_ED.png'
import Pproject15 from '../assets/Project_Imgs/Project_1/05_Endoscopy.png'
import Pproject16 from '../assets/Project_Imgs/Project_1/06_HR.png'
import Pproject21 from '../assets/Project_Imgs/Project_2/01_Exicutive.png'
import Pproject22 from '../assets/Project_Imgs/Project_2/02_Supplier.png'
import Pproject23 from '../assets/Project_Imgs/Project_2/03_Production.png'
import Pproject24 from '../assets/Project_Imgs/Project_2/04_Inventory.png'
import Pproject25 from '../assets/Project_Imgs/Project_2/05_Shipment.png'
import Pproject26 from '../assets/Project_Imgs/Project_2/06_Sales.png'
import Pproject31 from '../assets/Project_Imgs/Project_3/01_Blue.png'
import Pproject32 from '../assets/Project_Imgs/Project_3/02_Green.png'
import Pproject41 from '../assets/Project_Imgs/Project_4/01_Home.png'
import Pproject42 from '../assets/Project_Imgs/Project_4/02_Allance.png'
import Pproject43 from '../assets/Project_Imgs/Project_4/03_State.png'
import Pproject44 from '../assets/Project_Imgs/Project_4/04_Party.png'
import Pproject51 from '../assets/Project_Imgs/Project_5/5_1.png'
import Pproject52 from '../assets/Project_Imgs/Project_5/5_2.png'
import Pproject53 from '../assets/Project_Imgs/Project_5/5_3.png'
import Pproject54 from '../assets/Project_Imgs/Project_5/5_4.png'
import Pproject61 from '../assets/Project_Imgs/Project_6/6_1.png'
import Pproject62 from '../assets/Project_Imgs/Project_6/6_2.png'
import Pproject63 from '../assets/Project_Imgs/Project_6/6_3.png'
import Pproject64 from '../assets/Project_Imgs/Project_6/6_4.png'


// ============================================================
// PROJECT CONSTANTS / DATA
// ============================================================

const projects = [

        {
            id: 1,
            title: 'Hospital Dashboard',
            desc: 'A comprehensive, production-ready Power BI solution for modern healthcare analytics & clinical insights.',
            toshow: 'yes',
            images: [
                Pproject11,
                Pproject12,
                Pproject13,
                Pproject14,
                Pproject15,
                Pproject16
            ],
            tags: [
                'PowerBI',
                'DAX',
                'Copilot',
                'ai',
                'hospital',
                'cloudstorage',
                'machinelearning',
                'dashboard',
                'data-analysys',
                'vba'
            ],
            githubLink: 'https://github.com/shashikanthmbhat/Hospial-Dashboard'
        },


        {
            id: 2,
            title: 'Supply Chain Dashboard',
            desc: 'Comprehensive analysis of critical key performance indicators (KPIs) to drive strategic operational oversight',
            toshow: 'yes',
            images: [
                Pproject21,
                Pproject22,
                Pproject23,
                Pproject24,
                Pproject25,
                Pproject26
            ],
            tags: [
                'PowerBI',
                'DAX',
                'Copilot',
                'supply-chain',
                'data-analysys',
                'business-intelligence',
                'dashboard',
                'vba',
                'machinelearning'
            ],
            githubLink: 'https://github.com/shashikanthmbhat/Supply-Chain-Dashboard'
        },


        {
            id: 3,
            title: 'Appointment Visual Dashboard',
            desc: 'Interactive, calendar-style meeting view inside Power BI using new Card visual',
            toshow: 'yes',
            images: [
                Pproject31,
                Pproject32
            ],
            tags: [
                'PowerBI',
                'DAX',
                'Copilot',
                'csv',
                'dax-expression',
                'dax-querry',
                'hranalytics',
                'election2024'
            ],
            githubLink: 'https://github.com/shashikanthmbhat/Appointment_Visual'
        },


        {
            id: 4,
            title: 'Election Result Analysis Dashboard',
            desc: 'Dashboard on deep dive analysis on results of Indian General Election 2024',
            toshow: 'no',
            images: [
                Pproject41,
                Pproject42,
                Pproject43,
                Pproject44
            ],
            tags: [
                'PowerBI',
                'DAX',
                'Copilot',
                'dataanalysis',
                'cloudstorage',
                'dataengineering',
                'datavisualization',
                'election2024',
                'excel'
            ],
            githubLink: 'https://github.com/shashikanthmbhat/Election_Result_Analysis'
        },


        {
            id: 5,
            title: 'Banking Analytics Dashboard',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni eiu',
            toshow: 'no',
            images: [
                Pproject51,
                Pproject52,
                Pproject53,
                Pproject54
            ],
            tags: [
                'PowerBI',
                'DAX',
                'Copilot'
            ],
            githubLink: 'https://github.com/shashikanthmbhat/Supply-Chain-Dashboard'
        },


        {
            id: 6,
            title: 'Sales Overview Dashboard',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni eiu',
            toshow: 'no',
            images: [
                Pproject61,
                Pproject62,
                Pproject63,
                Pproject64
            ],
            tags: [
                'PowerBI',
                'DAX',
                'Copilot'
            ],
            githubLink: 'https://github.com/shashikanthmbhat/Supply-Chain-Dashboard'
        }

]

    const headerPj = {
    title1: 'My',
    title2: 'Projects',
    description: 'a showcase of my recent Work'
    };

// ============================================================
// EXPORTS
// ============================================================

export {
    projects,
    headerPj
}
