import { Component, OnInit } from '@angular/core';

import { Notification } from '../../models/Notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[];
  

  constructor() {
    
  }

  ngOnInit() {

    this.notifications = [
      {
        type: 'Message',
        text: 'Nova poruka',
        icon: '../../../assets/images/notification_icons/noti_message.svg'
      },
      {
        type: 'Message',
        text: 'Nova poruka',
        icon: '../../../assets/images/notification_icons/noti_message.svg'
      },
      {
        type: 'Photo',
        text: 'Nove fotografije sa vašeg gradilišta',
        icon: '../../../assets/images/notification_icons/noti_photo.svg'
      },
      {
        type: 'To-Do done',
        text: 'Stavka iz To-Do list završena',
        icon: '../../../assets/images/notification_icons/noti_todo_done.svg'
      },
      {
        type: 'Document',
        text: 'Ubačen novi dokument',
        icon: '../../../assets/images/notification_icons/noti_document.svg'
      },
      {
        type: 'Survey',
        text: 'Imate novu anketu',
        icon: '../../../assets/images/notification_icons/noti_survey.svg'
      },
      {
        type: 'Photo',
        text: 'Nove fotografije sa vašeg gradilišta',
        icon: '../../../assets/images/notification_icons/noti_photo.svg'
      },
      {
        type: 'To-Do done',
        text: 'Stavka iz To-Do list završena',
        icon: '../../../assets/images/notification_icons/noti_todo_done.svg'
      },
      {
        type: 'To-Do',
        text: 'Nova stavka u To-Do listi',
        icon: '../../../assets/images/notification_icons/noti_todo.svg'
      },
      {
        type: 'To-Do time',
        text: 'Bliži se rok za odgovor To-Do stavke',
        icon: '../../../assets/images/notification_icons/noti_todo_time.svg'
      }
    ];

  }



}