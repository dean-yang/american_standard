import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import * as typegoose from '@midwayjs/typegoose';

@Configuration({
  imports: [
    typegoose                       // 加载 typegoose 组件
  ]
})
export class ContainerLifeCycle implements ILifeCycle {

  @App()
  app: Application;

  async onReady() {
  }
}
