import { RoadData } from '../roadmap_data';
import { front_html_private } from '@/roadmap_json/frontend_data/HTML';
import { front_css_private } from '@/roadmap_json/frontend_data/CSS';
import { front_javascript_private } from '@/roadmap_json/frontend_data/javascript';

export const roadmap_front_private: RoadData = {
  nid: 1,
  name: 'Front-end',
  children: [
    front_html_private,
    front_css_private,
    front_javascript_private,


  ],
};
