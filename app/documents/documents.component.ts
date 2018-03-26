import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
    {
      title: "My first doc",
      description: "asdfasdf",
      file_url: "http://google.com",
      updated_at: "03/14/18",
      image_url: "http://google.com",
    },
    {
      title: "My second doc",
      description: "asdfasdf",
      file_url: "http://google.com",
      updated_at: "03/15/18",
      image_url: "http://google.com",
    },
    {
      title: "My third doc",
      description: "asdfasdf",
      file_url: "http://google.com",
      updated_at: "03/16/18",
      image_url: "http://google.com",
    }
  ]
}
