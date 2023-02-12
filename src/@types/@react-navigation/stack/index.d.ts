declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    SignIn: NavigationStackProp<any, any>
    SignUpFirstStep: NavigationStackProp<any, any>
    SignUpSecondStep: NavigationStackProp<any, any>
    Confirmation: NavigationStackProp<any, any>
    Home: NavigationStackProp<any, any>
    CarDetails: NavigationStackProp<any, any>
    Scheduling: NavigationStackProp<any, any>
    SchedulingDetails: NavigationStackProp<any, any>
    SchedulingComplete: NavigationStackProp<any, any>
    MyCars: NavigationStackProp<any, any>
  }
}