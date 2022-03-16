export function gridTemplate(code: any){
   return  `
   Ext.onReady(function(){
        var componetCode = ${code};
        var page;
        function createComponent(renderComponent){
          if(page){
            page.destroy()
          }
          page = Ext.create(renderComponent, {
            height: '90%',
            width: '96%',
            display: 'flex',
            margin: '10px',
            renderTo: 'content-frame'
          });
        }
        
        createComponent(componetCode);

        const onMessageCallback = function(event){
          const message = event.data;
            switch (message.type) {
              case 'reloadView': {
                code = eval(message.code);
                createComponent(code)
              }
            }
        }
        window.addEventListener('message',onMessageCallback);
   });  
    `
}