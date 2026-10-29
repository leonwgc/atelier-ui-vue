import { defineAsyncComponent } from 'vue';
import Example001Source from './examples/Example001-ActionIcons.vue?raw';
import Example002Source from './examples/Example002-Toolbar.vue?raw';
import Example003Source from './examples/Example003-Actions.vue?raw';
import Example004Source from './examples/Example004-ProjectLayout.vue?raw';
import Example005Source from './examples/Example005-ProjectGrid.vue?raw';
import Example006Source from './examples/Example006-VerificationCode.vue?raw';
import Example007Source from './examples/Example007-SaveResult.vue?raw';
import Example008Source from './examples/Example008-SaveMessage.vue?raw';
import Example009Source from './examples/Example009-ProjectNotice.vue?raw';
import Example010Source from './examples/Example010-BrandedSection.vue?raw';
import Example011Source from './examples/Example011-ProjectMarquee.vue?raw';
import Example012Source from './examples/Example012-MonthlyRevenue.vue?raw';
import Example013Source from './examples/Example013-RotatingHeadline.vue?raw';
import Example014Source from './examples/Example014-Intro.vue?raw';
import Example015Source from './examples/Example015-Intro.vue?raw';
import Example016Source from './examples/Example016-Intro.vue?raw';
import Example017Source from './examples/Example017-FeatureCard.vue?raw';
import Example018Source from './examples/Example018-WelcomeCard.vue?raw';
import Example019Source from './examples/Example019-FeatureTags.vue?raw';
import Example020Source from './examples/Example020-Details.vue?raw';
import Example021Source from './examples/Example021-LiveStatus.vue?raw';
import Example022Source from './examples/Example022-Highlight.vue?raw';
import Example023Source from './examples/Example023-InvalidField.vue?raw';
import Example024Source from './examples/Example024-NewFeature.vue?raw';
import Example025Source from './examples/Example025-ProjectCard.vue?raw';
import Example026Source from './examples/Example026-PressableCard.vue?raw';
import Example027Source from './examples/Example027-RevealCard.vue?raw';
import Example028Source from './examples/Example028-MemberCard.vue?raw';
import Example029Source from './examples/Example029-SuccessMessage.vue?raw';
import Example030Source from './examples/Example030-Highlight.vue?raw';
import Example031Source from './examples/Example031-ActivityFeed.vue?raw';
import Example032Source from './examples/Example032-FilterPanel.vue?raw';
import Example033Source from './examples/Example033-TeamMembers.vue?raw';
import Example034Source from './examples/Example034-HighlightCard.vue?raw';
import Example035Source from './examples/Example035-CreateWorkspace.vue?raw';
import Example036Source from './examples/Example036-ButtonTypes.vue?raw';
import Example037Source from './examples/Example037-ButtonSizesAndStates.vue?raw';
import Example038Source from './examples/Example038-SaveSettingsButton.vue?raw';
import Example039Source from './examples/Example039-ProjectFields.vue?raw';
import Example040Source from './examples/Example040-ProjectDescription.vue?raw';
import Example041Source from './examples/Example041-NotificationPreferences.vue?raw';
import Example042Source from './examples/Example042-WorkspaceRolePicker.vue?raw';
import Example043Source from './examples/Example043-ProductUpdatesSwitch.vue?raw';
import Example044Source from './examples/Example044-InviteMember.vue?raw';
import Example045Source from './examples/Example045-DeleteProjectButton.vue?raw';
import Example046Source from './examples/Example046-ProjectTable.vue?raw';
import Example047Source from './examples/Example047-ServerProjectTable.vue?raw';
import Example048Source from './examples/Example048-WorkspaceNotice.vue?raw';
import Example049Source from './examples/Example049-ProjectTags.vue?raw';
import Example050Source from './examples/Example050-TeamAvatars.vue?raw';
import Example051Source from './examples/Example051-HelpTooltip.vue?raw';
import Example052Source from './examples/Example052-NotificationBadge.vue?raw';
import Example053Source from './examples/Example053-ProjectBreadcrumb.vue?raw';
import Example054Source from './examples/Example054-CustomBreadcrumb.vue?raw';
import Example055Source from './examples/Example055-ContentDivider.vue?raw';
import Example056Source from './examples/Example056-InlineDivider.vue?raw';
import Example057Source from './examples/Example057-EmptyProjects.vue?raw';
import Example058Source from './examples/Example058-EmptySearchResults.vue?raw';
import Example059Source from './examples/Example059-ProjectPagination.vue?raw';
import Example060Source from './examples/Example060-UploadProgress.vue?raw';
import Example061Source from './examples/Example061-ProjectCardPlaceholder.vue?raw';
import Example062Source from './examples/Example062-CompactPlaceholder.vue?raw';
import Example063Source from './examples/Example063-LoadingIndicators.vue?raw';
import Example064Source from './examples/Example064-LoadingMembers.vue?raw';
import Example065Source from './examples/Example065-ProjectTabs.vue?raw';
import Example066Source from './examples/Example066-ProjectCard.vue?raw';
import Example067Source from './examples/Example067-ProjectDetails.vue?raw';
import Example068Source from './examples/Example068-WorkspaceSetup.vue?raw';
import Example069Source from './examples/Example069-ProjectActivity.vue?raw';
import Example070Source from './examples/Example070-ProjectSettings.vue?raw';
import Example071Source from './examples/Example071-ReleaseDate.vue?raw';
import Example072Source from './examples/Example072-ProjectFiles.vue?raw';
import Example073Source from './examples/Example073-ProjectDrawer.vue?raw';
import Example074Source from './examples/Example074-Intro.vue?raw';
import Example075Source from './examples/Example075-Metrics.vue?raw';
import Example076Source from './examples/Example076-Gallery.vue?raw';
import Example077Source from './examples/Example077-Banner.vue?raw';
import Example078Source from './examples/Example078-Schedule.vue?raw';
import Example079Source from './examples/Example079-FolderTree.vue?raw';
import Example080Source from './examples/Example080-Members.vue?raw';
import Example081Source from './examples/Example081-BigList.vue?raw';
import Example082Source from './examples/Example082-Gallery.vue?raw';
import Example083Source from './examples/Example083-Invite.vue?raw';
import Example084Source from './examples/Example084-ProtectedPreview.vue?raw';
import Example085Source from './examples/Example085-Workbench.vue?raw';
import Example086Source from './examples/Example086-RolePicker.vue?raw';
import Example087Source from './examples/Example087-ChannelPicker.vue?raw';
import Example088Source from './examples/Example088-GroupedRoles.vue?raw';
import Example089Source from './examples/Example089-OwnerSearch.vue?raw';
import Example090Source from './examples/Example090-MemberSearch.vue?raw';
import Example091Source from './examples/Example091-TeamCapacity.vue?raw';
import Example092Source from './examples/Example092-Satisfaction.vue?raw';
import Example093Source from './examples/Example093-OpacitySetting.vue?raw';
import Example094Source from './examples/Example094-ViewSwitch.vue?raw';
import Example095Source from './examples/Example095-MeetingTime.vue?raw';
import Example096Source from './examples/Example096-BrandColor.vue?raw';
import Example097Source from './examples/Example097-TeamNote.vue?raw';
import Example098Source from './examples/Example098-RegionPicker.vue?raw';
import Example099Source from './examples/Example099-TeamSelect.vue?raw';
import Example100Source from './examples/Example100-MemberTransfer.vue?raw';
import Example101Source from './examples/Example101-ProjectActions.vue?raw';
import Example102Source from './examples/Example102-WorkspaceMenu.vue?raw';
import Example103Source from './examples/Example103-Navigations.vue?raw';
import Example104Source from './examples/Example104-PageNavigation.vue?raw';
import Example105Source from './examples/Example105-SectionTabs.vue?raw';
import Example106Source from './examples/Example106-StickyToolbar.vue?raw';
import Example107Source from './examples/Example107-Onboarding.vue?raw';
import Example108Source from './examples/Example108-QuickActions.vue?raw';
import Example109Source from './examples/Example109-ShareDetails.vue?raw';
import Example110Source from './examples/Example110-ProjectDanger.vue?raw';
export const examples = {
  Example001: {
    component: defineAsyncComponent(
      () => import('./examples/Example001-ActionIcons.vue'),
    ),
    source: Example001Source,
  },
  Example002: {
    component: defineAsyncComponent(() => import('./examples/Example002-Toolbar.vue')),
    source: Example002Source,
  },
  Example003: {
    component: defineAsyncComponent(() => import('./examples/Example003-Actions.vue')),
    source: Example003Source,
  },
  Example004: {
    component: defineAsyncComponent(
      () => import('./examples/Example004-ProjectLayout.vue'),
    ),
    source: Example004Source,
  },
  Example005: {
    component: defineAsyncComponent(
      () => import('./examples/Example005-ProjectGrid.vue'),
    ),
    source: Example005Source,
  },
  Example006: {
    component: defineAsyncComponent(
      () => import('./examples/Example006-VerificationCode.vue'),
    ),
    source: Example006Source,
  },
  Example007: {
    component: defineAsyncComponent(() => import('./examples/Example007-SaveResult.vue')),
    source: Example007Source,
  },
  Example008: {
    component: defineAsyncComponent(
      () => import('./examples/Example008-SaveMessage.vue'),
    ),
    source: Example008Source,
  },
  Example009: {
    component: defineAsyncComponent(
      () => import('./examples/Example009-ProjectNotice.vue'),
    ),
    source: Example009Source,
  },
  Example010: {
    component: defineAsyncComponent(
      () => import('./examples/Example010-BrandedSection.vue'),
    ),
    source: Example010Source,
  },
  Example011: {
    component: defineAsyncComponent(
      () => import('./examples/Example011-ProjectMarquee.vue'),
    ),
    source: Example011Source,
  },
  Example012: {
    component: defineAsyncComponent(
      () => import('./examples/Example012-MonthlyRevenue.vue'),
    ),
    source: Example012Source,
  },
  Example013: {
    component: defineAsyncComponent(
      () => import('./examples/Example013-RotatingHeadline.vue'),
    ),
    source: Example013Source,
  },
  Example014: {
    component: defineAsyncComponent(() => import('./examples/Example014-Intro.vue')),
    source: Example014Source,
  },
  Example015: {
    component: defineAsyncComponent(() => import('./examples/Example015-Intro.vue')),
    source: Example015Source,
  },
  Example016: {
    component: defineAsyncComponent(() => import('./examples/Example016-Intro.vue')),
    source: Example016Source,
  },
  Example017: {
    component: defineAsyncComponent(
      () => import('./examples/Example017-FeatureCard.vue'),
    ),
    source: Example017Source,
  },
  Example018: {
    component: defineAsyncComponent(
      () => import('./examples/Example018-WelcomeCard.vue'),
    ),
    source: Example018Source,
  },
  Example019: {
    component: defineAsyncComponent(
      () => import('./examples/Example019-FeatureTags.vue'),
    ),
    source: Example019Source,
  },
  Example020: {
    component: defineAsyncComponent(() => import('./examples/Example020-Details.vue')),
    source: Example020Source,
  },
  Example021: {
    component: defineAsyncComponent(() => import('./examples/Example021-LiveStatus.vue')),
    source: Example021Source,
  },
  Example022: {
    component: defineAsyncComponent(() => import('./examples/Example022-Highlight.vue')),
    source: Example022Source,
  },
  Example023: {
    component: defineAsyncComponent(
      () => import('./examples/Example023-InvalidField.vue'),
    ),
    source: Example023Source,
  },
  Example024: {
    component: defineAsyncComponent(() => import('./examples/Example024-NewFeature.vue')),
    source: Example024Source,
  },
  Example025: {
    component: defineAsyncComponent(
      () => import('./examples/Example025-ProjectCard.vue'),
    ),
    source: Example025Source,
  },
  Example026: {
    component: defineAsyncComponent(
      () => import('./examples/Example026-PressableCard.vue'),
    ),
    source: Example026Source,
  },
  Example027: {
    component: defineAsyncComponent(() => import('./examples/Example027-RevealCard.vue')),
    source: Example027Source,
  },
  Example028: {
    component: defineAsyncComponent(() => import('./examples/Example028-MemberCard.vue')),
    source: Example028Source,
  },
  Example029: {
    component: defineAsyncComponent(
      () => import('./examples/Example029-SuccessMessage.vue'),
    ),
    source: Example029Source,
  },
  Example030: {
    component: defineAsyncComponent(() => import('./examples/Example030-Highlight.vue')),
    source: Example030Source,
  },
  Example031: {
    component: defineAsyncComponent(
      () => import('./examples/Example031-ActivityFeed.vue'),
    ),
    source: Example031Source,
  },
  Example032: {
    component: defineAsyncComponent(
      () => import('./examples/Example032-FilterPanel.vue'),
    ),
    source: Example032Source,
  },
  Example033: {
    component: defineAsyncComponent(
      () => import('./examples/Example033-TeamMembers.vue'),
    ),
    source: Example033Source,
  },
  Example034: {
    component: defineAsyncComponent(
      () => import('./examples/Example034-HighlightCard.vue'),
    ),
    source: Example034Source,
  },
  Example035: {
    component: defineAsyncComponent(
      () => import('./examples/Example035-CreateWorkspace.vue'),
    ),
    source: Example035Source,
  },
  Example036: {
    component: defineAsyncComponent(
      () => import('./examples/Example036-ButtonTypes.vue'),
    ),
    source: Example036Source,
  },
  Example037: {
    component: defineAsyncComponent(
      () => import('./examples/Example037-ButtonSizesAndStates.vue'),
    ),
    source: Example037Source,
  },
  Example038: {
    component: defineAsyncComponent(
      () => import('./examples/Example038-SaveSettingsButton.vue'),
    ),
    source: Example038Source,
  },
  Example039: {
    component: defineAsyncComponent(
      () => import('./examples/Example039-ProjectFields.vue'),
    ),
    source: Example039Source,
  },
  Example040: {
    component: defineAsyncComponent(
      () => import('./examples/Example040-ProjectDescription.vue'),
    ),
    source: Example040Source,
  },
  Example041: {
    component: defineAsyncComponent(
      () => import('./examples/Example041-NotificationPreferences.vue'),
    ),
    source: Example041Source,
  },
  Example042: {
    component: defineAsyncComponent(
      () => import('./examples/Example042-WorkspaceRolePicker.vue'),
    ),
    source: Example042Source,
  },
  Example043: {
    component: defineAsyncComponent(
      () => import('./examples/Example043-ProductUpdatesSwitch.vue'),
    ),
    source: Example043Source,
  },
  Example044: {
    component: defineAsyncComponent(
      () => import('./examples/Example044-InviteMember.vue'),
    ),
    source: Example044Source,
  },
  Example045: {
    component: defineAsyncComponent(
      () => import('./examples/Example045-DeleteProjectButton.vue'),
    ),
    source: Example045Source,
  },
  Example046: {
    component: defineAsyncComponent(
      () => import('./examples/Example046-ProjectTable.vue'),
    ),
    source: Example046Source,
  },
  Example047: {
    component: defineAsyncComponent(
      () => import('./examples/Example047-ServerProjectTable.vue'),
    ),
    source: Example047Source,
  },
  Example048: {
    component: defineAsyncComponent(
      () => import('./examples/Example048-WorkspaceNotice.vue'),
    ),
    source: Example048Source,
  },
  Example049: {
    component: defineAsyncComponent(
      () => import('./examples/Example049-ProjectTags.vue'),
    ),
    source: Example049Source,
  },
  Example050: {
    component: defineAsyncComponent(
      () => import('./examples/Example050-TeamAvatars.vue'),
    ),
    source: Example050Source,
  },
  Example051: {
    component: defineAsyncComponent(
      () => import('./examples/Example051-HelpTooltip.vue'),
    ),
    source: Example051Source,
  },
  Example052: {
    component: defineAsyncComponent(
      () => import('./examples/Example052-NotificationBadge.vue'),
    ),
    source: Example052Source,
  },
  Example053: {
    component: defineAsyncComponent(
      () => import('./examples/Example053-ProjectBreadcrumb.vue'),
    ),
    source: Example053Source,
  },
  Example054: {
    component: defineAsyncComponent(
      () => import('./examples/Example054-CustomBreadcrumb.vue'),
    ),
    source: Example054Source,
  },
  Example055: {
    component: defineAsyncComponent(
      () => import('./examples/Example055-ContentDivider.vue'),
    ),
    source: Example055Source,
  },
  Example056: {
    component: defineAsyncComponent(
      () => import('./examples/Example056-InlineDivider.vue'),
    ),
    source: Example056Source,
  },
  Example057: {
    component: defineAsyncComponent(
      () => import('./examples/Example057-EmptyProjects.vue'),
    ),
    source: Example057Source,
  },
  Example058: {
    component: defineAsyncComponent(
      () => import('./examples/Example058-EmptySearchResults.vue'),
    ),
    source: Example058Source,
  },
  Example059: {
    component: defineAsyncComponent(
      () => import('./examples/Example059-ProjectPagination.vue'),
    ),
    source: Example059Source,
  },
  Example060: {
    component: defineAsyncComponent(
      () => import('./examples/Example060-UploadProgress.vue'),
    ),
    source: Example060Source,
  },
  Example061: {
    component: defineAsyncComponent(
      () => import('./examples/Example061-ProjectCardPlaceholder.vue'),
    ),
    source: Example061Source,
  },
  Example062: {
    component: defineAsyncComponent(
      () => import('./examples/Example062-CompactPlaceholder.vue'),
    ),
    source: Example062Source,
  },
  Example063: {
    component: defineAsyncComponent(
      () => import('./examples/Example063-LoadingIndicators.vue'),
    ),
    source: Example063Source,
  },
  Example064: {
    component: defineAsyncComponent(
      () => import('./examples/Example064-LoadingMembers.vue'),
    ),
    source: Example064Source,
  },
  Example065: {
    component: defineAsyncComponent(
      () => import('./examples/Example065-ProjectTabs.vue'),
    ),
    source: Example065Source,
  },
  Example066: {
    component: defineAsyncComponent(
      () => import('./examples/Example066-ProjectCard.vue'),
    ),
    source: Example066Source,
  },
  Example067: {
    component: defineAsyncComponent(
      () => import('./examples/Example067-ProjectDetails.vue'),
    ),
    source: Example067Source,
  },
  Example068: {
    component: defineAsyncComponent(
      () => import('./examples/Example068-WorkspaceSetup.vue'),
    ),
    source: Example068Source,
  },
  Example069: {
    component: defineAsyncComponent(
      () => import('./examples/Example069-ProjectActivity.vue'),
    ),
    source: Example069Source,
  },
  Example070: {
    component: defineAsyncComponent(
      () => import('./examples/Example070-ProjectSettings.vue'),
    ),
    source: Example070Source,
  },
  Example071: {
    component: defineAsyncComponent(
      () => import('./examples/Example071-ReleaseDate.vue'),
    ),
    source: Example071Source,
  },
  Example072: {
    component: defineAsyncComponent(
      () => import('./examples/Example072-ProjectFiles.vue'),
    ),
    source: Example072Source,
  },
  Example073: {
    component: defineAsyncComponent(
      () => import('./examples/Example073-ProjectDrawer.vue'),
    ),
    source: Example073Source,
  },
  Example074: {
    component: defineAsyncComponent(() => import('./examples/Example074-Intro.vue')),
    source: Example074Source,
  },
  Example075: {
    component: defineAsyncComponent(() => import('./examples/Example075-Metrics.vue')),
    source: Example075Source,
  },
  Example076: {
    component: defineAsyncComponent(() => import('./examples/Example076-Gallery.vue')),
    source: Example076Source,
  },
  Example077: {
    component: defineAsyncComponent(() => import('./examples/Example077-Banner.vue')),
    source: Example077Source,
  },
  Example078: {
    component: defineAsyncComponent(() => import('./examples/Example078-Schedule.vue')),
    source: Example078Source,
  },
  Example079: {
    component: defineAsyncComponent(() => import('./examples/Example079-FolderTree.vue')),
    source: Example079Source,
  },
  Example080: {
    component: defineAsyncComponent(() => import('./examples/Example080-Members.vue')),
    source: Example080Source,
  },
  Example081: {
    component: defineAsyncComponent(() => import('./examples/Example081-BigList.vue')),
    source: Example081Source,
  },
  Example082: {
    component: defineAsyncComponent(() => import('./examples/Example082-Gallery.vue')),
    source: Example082Source,
  },
  Example083: {
    component: defineAsyncComponent(() => import('./examples/Example083-Invite.vue')),
    source: Example083Source,
  },
  Example084: {
    component: defineAsyncComponent(
      () => import('./examples/Example084-ProtectedPreview.vue'),
    ),
    source: Example084Source,
  },
  Example085: {
    component: defineAsyncComponent(() => import('./examples/Example085-Workbench.vue')),
    source: Example085Source,
  },
  Example086: {
    component: defineAsyncComponent(() => import('./examples/Example086-RolePicker.vue')),
    source: Example086Source,
  },
  Example087: {
    component: defineAsyncComponent(
      () => import('./examples/Example087-ChannelPicker.vue'),
    ),
    source: Example087Source,
  },
  Example088: {
    component: defineAsyncComponent(
      () => import('./examples/Example088-GroupedRoles.vue'),
    ),
    source: Example088Source,
  },
  Example089: {
    component: defineAsyncComponent(
      () => import('./examples/Example089-OwnerSearch.vue'),
    ),
    source: Example089Source,
  },
  Example090: {
    component: defineAsyncComponent(
      () => import('./examples/Example090-MemberSearch.vue'),
    ),
    source: Example090Source,
  },
  Example091: {
    component: defineAsyncComponent(
      () => import('./examples/Example091-TeamCapacity.vue'),
    ),
    source: Example091Source,
  },
  Example092: {
    component: defineAsyncComponent(
      () => import('./examples/Example092-Satisfaction.vue'),
    ),
    source: Example092Source,
  },
  Example093: {
    component: defineAsyncComponent(
      () => import('./examples/Example093-OpacitySetting.vue'),
    ),
    source: Example093Source,
  },
  Example094: {
    component: defineAsyncComponent(() => import('./examples/Example094-ViewSwitch.vue')),
    source: Example094Source,
  },
  Example095: {
    component: defineAsyncComponent(
      () => import('./examples/Example095-MeetingTime.vue'),
    ),
    source: Example095Source,
  },
  Example096: {
    component: defineAsyncComponent(() => import('./examples/Example096-BrandColor.vue')),
    source: Example096Source,
  },
  Example097: {
    component: defineAsyncComponent(() => import('./examples/Example097-TeamNote.vue')),
    source: Example097Source,
  },
  Example098: {
    component: defineAsyncComponent(
      () => import('./examples/Example098-RegionPicker.vue'),
    ),
    source: Example098Source,
  },
  Example099: {
    component: defineAsyncComponent(() => import('./examples/Example099-TeamSelect.vue')),
    source: Example099Source,
  },
  Example100: {
    component: defineAsyncComponent(
      () => import('./examples/Example100-MemberTransfer.vue'),
    ),
    source: Example100Source,
  },
  Example101: {
    component: defineAsyncComponent(
      () => import('./examples/Example101-ProjectActions.vue'),
    ),
    source: Example101Source,
  },
  Example102: {
    component: defineAsyncComponent(
      () => import('./examples/Example102-WorkspaceMenu.vue'),
    ),
    source: Example102Source,
  },
  Example103: {
    component: defineAsyncComponent(
      () => import('./examples/Example103-Navigations.vue'),
    ),
    source: Example103Source,
  },
  Example104: {
    component: defineAsyncComponent(
      () => import('./examples/Example104-PageNavigation.vue'),
    ),
    source: Example104Source,
  },
  Example105: {
    component: defineAsyncComponent(
      () => import('./examples/Example105-SectionTabs.vue'),
    ),
    source: Example105Source,
  },
  Example106: {
    component: defineAsyncComponent(
      () => import('./examples/Example106-StickyToolbar.vue'),
    ),
    source: Example106Source,
  },
  Example107: {
    component: defineAsyncComponent(() => import('./examples/Example107-Onboarding.vue')),
    source: Example107Source,
  },
  Example108: {
    component: defineAsyncComponent(
      () => import('./examples/Example108-QuickActions.vue'),
    ),
    source: Example108Source,
  },
  Example109: {
    component: defineAsyncComponent(
      () => import('./examples/Example109-ShareDetails.vue'),
    ),
    source: Example109Source,
  },
  Example110: {
    component: defineAsyncComponent(
      () => import('./examples/Example110-ProjectDanger.vue'),
    ),
    source: Example110Source,
  },
};
