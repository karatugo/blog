import React from "react";
import {connect} from 'react-redux'
import {getPosts} from '../Redux/action'
import {Card, Row, Col, Layout, Menu, Space} from 'antd';
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import ListPosts from "./ListPosts";
import CreateNewPost from "./CreateNewPost";


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:1
        }
    }
    handleClick = e => {
        this.setState({selected:e})
    }
    render() {
        const { Header, Footer, Sider, Content } = Layout;

        return (
            <Layout>
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[this.state.selected.toString()]}>
                        <Menu.Item key="1" onClick={() => this.handleClick(1)}> Read Posts</Menu.Item>
                        <Menu.Item key="2" onClick={() => this.handleClick(2)}> Create Post</Menu.Item>
                    </Menu></Header>
                <Content>
                        {this.state.selected==1?<ListPosts />: <CreateNewPost />
                        }
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts
})

const mapDispatchToProps = {
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
