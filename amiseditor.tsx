import React from 'react'
import { Editor } from 'amis-editor';
import { Layout, Switch, classnames as cx } from 'amis';
import schemaUrl from './schema.json';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'amis/lib/themes/cxd.css';
import 'amis/lib/themes/default.css';

import 'amis-editor/dist/style.css';
// import '../scss/style.scss';


export default class BlogDetail extends React.Component {

  state={
    preview: false,
    isMobile: false,
    schema: {
      "type": "page",
      "title": "page",
      "body": "初始页面"
    }
  }

  updateSchema = (value) => {
    this.setState({
      schema : value
    })
  }

  saveSchema = (value) => {
  }

  exit=()=>{}

  renderHeader = () => {
    return (
      <div className="editor-header clearfix box-shadow bg-dark"
      style={{position:"relative",textAlign: "right"}}>
          <div className="navbar-brand text-lt font-thin"
          style={{float: "left"}}>AMis 编辑器</div>

          <div className="editor-preview"
              style={{display: "inline-block",
          lineHeight:" 50px",
          marginRight: "15px",
          color:" #c1c4c9"}} >
              预览{' '}
              <Switch
                  value={this.state.preview}
                  onChange={(value) => this.setState({preview:value}) }
                  className="m-l-xs"
                  inline
              />
          </div>

          <div className="editor-preview"
          style={{display: "inline-block",
          lineHeight:" 50px",
          marginRight: "15px",
          color:" #c1c4c9"}} >
              移动端{' '}
              <Switch
                  value={this.state.isMobile}
                  onChange={(value) =>this.setState({isMobile:value}) }
                  className="m-l-xs"
                  inline
              />
          </div>

          <div className="editor-header-btns"
          style={{ display: "inline-block",whiteSpace: "nowrap"}}>
              <div className={cx('btn-item')} onClick={()=>this.saveSchema()}
               style={{
                userSelect: "none",
                cursor: "pointer",
                display: "inline-block",
                borderLeft: "1px solid #595c65",
                lineHeight: "50px",
                padding: "0 20px",
                color:" #c1c4c9"
              }}>
                  保存
              </div>

              <div className="btn-item"
              style={{
                userSelect: "none",
                cursor: "pointer",
                display: "inline-block",
                borderLeft: "1px solid #595c65",
                lineHeight: "50px",
                padding: "0 20px",
                color:" #c1c4c9"
              }}
              onClick={()=>this.exit()}>
                  退出
              </div>
          </div>
      </div>
  );
}
  render() {
    console.log(this.schema)
    return (
      <div>
       {/* <Layout 
         header={this.renderHeader()} 
        headerFixed={false} 
       > */}
        <Editor
        style={{bottom: "50px"}}
          preview={this.state.preview}
          theme={'cxd'}
          value={this.state.schema}
          onChange={(value) => this.updateSchema(value)}
          className="is-fixed"
          iframeUrl={'/editor.html'}
          isMobile={this.state.isMobile}
          autoFocus={true}
          $schemaUrl={schemaUrl}
        />
       {/* </Layout> */}
      </div>
    )
  }
}

