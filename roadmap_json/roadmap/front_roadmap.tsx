import { RoadData } from '../roadmap_data';
import { front_html_private } from '@/roadmap_json/roadmap/frontend_data_1/HTML';
import { front_css_private } from '@/roadmap_json/roadmap/frontend_data_1/CSS';
import { front_javascript_private } from '@/roadmap_json/roadmap/frontend_data_1/javascript';
import { front_typescript_private } from '@/roadmap_json/roadmap/frontend_data_1/javascript_2/typescript';
import { front_framework_private } from '@/roadmap_json/roadmap/frontend_data_1/framework';
import { cs_data_private } from '@/roadmap_json/roadmap/common_data_1/cs';
import { code_data_private } from '@/roadmap_json/roadmap/common_data_1/code';
import { algorithm_data_private } from '@/roadmap_json/roadmap/common_data_1/algorithm';

export const roadmap_front_private: RoadData = {
  nid: 1,
  name: 'Front-end',
  children: [
    front_html_private,
    front_css_private,
    front_javascript_private,
    front_framework_private,
    front_typescript_private,
    cs_data_private,
    code_data_private,
    algorithm_data_private
  ],
};
