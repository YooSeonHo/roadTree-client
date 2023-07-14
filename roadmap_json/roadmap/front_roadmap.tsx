import { RoadData } from '../roadmap_data';
import { front_html_private } from '@/roadmap_json/roadmap/frontend_data_1/HTML';
import { front_css_private } from '@/roadmap_json/roadmap/frontend_data_1/CSS';
import { front_javascript_private } from '@/roadmap_json/roadmap/frontend_data_1/javascript';
import { front_typescript_private } from '@/roadmap_json/roadmap/frontend_data_1/typescript';
import { front_framework_private } from '@/roadmap_json/roadmap/frontend_data_1/framework';

export const roadmap_front_private: RoadData = {
  nid: 1,
  name: 'Front-end',
  children: [
    front_html_private,
    front_css_private,
    front_javascript_private,
    front_framework_private,
    front_typescript_private,
  ],
};
