// todo создать типы для кнопок и ссылок и объединенить в INavElement
export interface INavElement {
}

export interface INavBarProps {
  title: string;
  navElements: INavElement[];
}
