export function getMainViewHtml(){
    const str = 
     `<div class="main-view">
        <div id="component-section">
            <div class="cmp-category">
                <div id="mainCategorySec"></div>
                <div id="subCategory">
                </div>
            </div>
            <div id="config-section">
                <div class="filter-section">
                    <vscode-text-field id="filter-field" placeholder="Search Configs..." style="width:100%;display:none;position:sticky"></vscode-text-field>
                </div>
                <div class="config-table-section">
                    <table></table>
                    <div id="events-list" style="width:100%"></div>
                    <div id="custom-functions"></div>
                </div>
            </div>
        </div>
        <div id="content-frame">
            <div class="show-button">
                <vscode-button id="show-code" style="float: right;margin: 5px 25px; width:15%;border-radius:5px;border:1px solid #ffff">Show code</vscode-button>
            </div>
            <div id="context-menu">
                <div class="item">Delete</div>
            </div>
        </div>
       </div>`;
       return str;
}