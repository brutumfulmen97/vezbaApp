import {atom, RecoilRoot} from 'recoil';

const RecoilProvider = ({children}: {children: React.ReactNode}) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;

type Todo = {
  id: string;
  text: string;
  isComplete: boolean;
};

type Todos = Todo[];

const initialState = [
  {id: '1', text: 'Learn Recoil', isComplete: false},
  {id: '2', text: 'Learn React Native', isComplete: false},
  {id: '3', text: 'Build a todo app', isComplete: false},
];

export const todoListState = atom<Todos>({
  key: 'todoListState',
  default: initialState,
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});
