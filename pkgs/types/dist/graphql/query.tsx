// @ts-nocheck
import { ComponentFrontendComponentsSelectedProjectDetails, Exact } from "./schema"
export type GenProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GenProjectsQuery = { __typename?: 'Query', projects?: { __typename?: 'ProjectEntityResponseCollection', data: Array<{ __typename?: 'ProjectEntity', id?: string | null, attributes?: { __typename?: 'Project', title: string } | null }> } | null };

export type FileAllAttributesFragment = { __typename?: 'UploadFile', caption?: string | null, createdAt?: any | null, ext?: string | null, formats?: any | null, hash: string, height?: number | null, width?: number | null, mime: string, name: string, size: number, updatedAt?: any | null, url: string, alternativeText?: string | null };

export type ProjectForSummaryFragment = { __typename?: 'Project', title: string, summary?: string | null, displayPicture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, github?: { __typename?: 'ComponentUiButton', text?: string | null, href?: string | null } | null, live?: { __typename?: 'ComponentUiButton', text?: string | null, href?: string | null } | null, skills?: { __typename?: 'SkillRelationResponseCollection', data: Array<{ __typename?: 'SkillEntity', attributes?: { __typename?: 'Skill', name: string } | null }> } | null };

export type ProjectPageQueryVariables = Exact<{
  pid?: InputMaybe<Scalars['ID']>;
}>;


export type ProjectPageQuery = { __typename?: 'Query', project?: { __typename?: 'ProjectEntityResponse', data?: { __typename?: 'ProjectEntity', attributes?: { __typename?: 'Project', title: string, content: string, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, displayPicture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', caption?: string | null, createdAt?: any | null, ext?: string | null, formats?: any | null, hash: string, height?: number | null, width?: number | null, mime: string, name: string, size: number, updatedAt?: any | null, url: string, alternativeText?: string | null } | null } | null } | null, github?: { __typename?: 'ComponentUiButton', external: boolean, href?: string | null, id: string, text?: string | null } | null, live?: { __typename?: 'ComponentUiButton', external: boolean, href?: string | null, id: string, text?: string | null } | null, skills?: { __typename?: 'SkillRelationResponseCollection', data: Array<{ __typename?: 'SkillEntity', attributes?: { __typename?: 'Skill', name: string } | null }> } | null } | null } | null } | null, projects?: { __typename?: 'ProjectEntityResponseCollection', data: Array<{ __typename?: 'ProjectEntity', id?: string | null, attributes?: { __typename?: 'Project', title: string, summary?: string | null, displayPicture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, github?: { __typename?: 'ComponentUiButton', text?: string | null, href?: string | null } | null, live?: { __typename?: 'ComponentUiButton', text?: string | null, href?: string | null } | null, skills?: { __typename?: 'SkillRelationResponseCollection', data: Array<{ __typename?: 'SkillEntity', attributes?: { __typename?: 'Skill', name: string } | null }> } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageCount: number, pageSize: number, total: number } } } | null };

export type ProjectsPageQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
}>;


export type ProjectsPageQuery = { __typename?: 'Query', projects?: { __typename?: 'ProjectEntityResponseCollection', data: Array<{ __typename?: 'ProjectEntity', id?: string | null, attributes?: { __typename?: 'Project', title: string, summary?: string | null, displayPicture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, github?: { __typename?: 'ComponentUiButton', text?: string | null, href?: string | null } | null, live?: { __typename?: 'ComponentUiButton', text?: string | null, href?: string | null } | null, skills?: { __typename?: 'SkillRelationResponseCollection', data: Array<{ __typename?: 'SkillEntity', attributes?: { __typename?: 'Skill', name: string } | null }> } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageCount: number, pageSize: number, total: number } } } | null };

export type GlobalQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalQuery = { __typename?: 'Query', global?: { __typename?: 'GlobalEntityResponse', data?: { __typename?: 'GlobalEntity', attributes?: { __typename?: 'Global', siteName: string, siteAbout: string, defaultSeo?: { __typename?: 'ComponentSharedSeo', id: string, description: string, title: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', caption?: string | null, createdAt?: any | null, ext?: string | null, formats?: any | null, hash: string, height?: number | null, width?: number | null, mime: string, name: string, size: number, updatedAt?: any | null, url: string, alternativeText?: string | null } | null } | null } | null } | null, favicon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', caption?: string | null, createdAt?: any | null, ext?: string | null, formats?: any | null, hash: string, height?: number | null, width?: number | null, mime: string, name: string, size: number, updatedAt?: any | null, url: string, alternativeText?: string | null } | null } | null } | null } | null } | null } | null };

export type ComponentAFragment = { __typename?: 'ComponentKennPageSelectedProjectDetails', id: string, heading: string, body: string, type: Enum_Componentkennpageselectedprojectdetails_Type, callOfAction?: Array<{ __typename?: 'ComponentUiButton', id: string, text?: string | null, href?: string | null, external: boolean } | null> | null };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { __typename?: 'Query', heroSection?: { __typename?: 'HeroSectionEntityResponse', data?: { __typename?: 'HeroSectionEntity', attributes?: { __typename?: 'HeroSection', h1: string, h2: string, aboutMe: string, callToAction?: Array<{ __typename?: 'ComponentUiButton', id: string, text?: string | null, href?: string | null, external: boolean } | null> | null, picture: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', caption?: string | null, createdAt?: any | null, ext?: string | null, formats?: any | null, hash: string, height?: number | null, width?: number | null, mime: string, name: string, size: number, updatedAt?: any | null, url: string, alternativeText?: string | null } | null } | null } } | null } | null } | null, mypocketDisplay?: { __typename?: 'MypocketDisplayEntityResponse', data?: { __typename?: 'MypocketDisplayEntity', attributes?: { __typename?: 'MypocketDisplay', content: Array<{ __typename: 'ComponentKennPageSelectedProjectDetails', id: string, heading: string, body: string, type: Enum_Componentkennpageselectedprojectdetails_Type, callOfAction?: Array<{ __typename?: 'ComponentUiButton', id: string, text?: string | null, href?: string | null, external: boolean } | null> | null } | { __typename: 'Error' } | null> } | null } | null } | null, getInContact?: { __typename?: 'GetInContactEntityResponse', data?: { __typename?: 'GetInContactEntity', attributes?: { __typename?: 'GetInContact', message: string, links?: Array<{ __typename?: 'ComponentUiButton', id: string, href?: string | null, text?: string | null, external: boolean } | null> | null } | null } | null } | null, projects?: { __typename?: 'ProjectEntityResponseCollection', data: Array<{ __typename?: 'ProjectEntity', id?: string | null, attributes?: { __typename?: 'Project', title: string, summary?: string | null, displayPicture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } | null, github?: { __typename?: 'ComponentUiButton', text?: string | null, href?: string | null } | null, live?: { __typename?: 'ComponentUiButton', text?: string | null, href?: string | null } | null, skills?: { __typename?: 'SkillRelationResponseCollection', data: Array<{ __typename?: 'SkillEntity', attributes?: { __typename?: 'Skill', name: string } | null }> } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageCount: number, pageSize: number, total: number } } } | null };
