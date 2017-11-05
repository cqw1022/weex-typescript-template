import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "Foo"
})
export default class Foo extends Vue {
	logoUrl:string = 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png';
    target:string = 'World';
    update(e): void{
        this.target = 'Weex';
        console.log('target:', this.target);
    }
}
