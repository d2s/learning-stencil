
import { Component } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss'
})

export class HomePage {
  render() {
    return (
      <div class="wrapper">

        <basic-event location="Helsinki, Finland"  name="HelsinkiJS" date="2013 - 2017" description="Regular monthly JavaScript meetups in Helsinki." />

        <basic-event location="Helsinki, Finland"  name="HelNode - Helsinki Node.js" date="2014 - 2017" description="This groups is for all who are using or considering to use Node.js or similar JavaScript/V8 based platforms as their server side technology. We'll discuss Node's use as a platform for both front-end and backend servers, use as application platform and even special use cases e.g. in embedded world. For example, how to develop Web apps, APIs and background workers; how to integrate into various databases (NoSQL, RDBs); how to run Node servers smoothly in production environment, e.g. in Amazon cloud." />

        <basic-event location="Helsinki, Finland" name="DevOps Finland" date="2015 - 2017" description="" />


        <basic-event location="Helsinki, Finland"  name="Helsinki Data Analytics & Science Meetup" date="2015" description="Event for people that like to exchange ideas and experiences about data analytics, data science, data management, etc." />


      </div>
    );
  }
}
