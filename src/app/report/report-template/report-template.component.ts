import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-report-template',
  templateUrl: './report-template.component.html',
  styleUrls: ['./report-template.component.scss']
})
export class ReportTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public generatePDF() {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('portrait');

      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const marge = 0;
      const position = 0;
      const format = 'PNG';

      pdf.addImage(contentDataURL, format, marge, position, imgWidth, imgHeight);
      pdf.save('amicable_report.pdf');
    });
  }

}
